import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const EditGame = ({ setModal, game, fetchGames, setSelectedGame }) => {
  const [image, setImage] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editDisplay, setEditDisplay] = useState("basic");

  const { token } = useAuth();

  const genres = [
    "Fighting",
    "Rhythm",
    "Light Gun",
    "STG (Shmups)",
    "Beat-Em-Ups",
    "Puzzle",
    "Platformer",
    "EXA-Arcadia STGs",
    "Other",
  ];

  const selectPlatform = () => {
    if (game.platform === "Arcade") {
      return (
        <>
          <option value={game.platform}>{game.platform}</option>
          <option value="Pinball">Pinball</option>
        </>
      );
    } else {
      return (
        <>
          <option value={game.platform}>{game.platform}</option>
          <option value="Arcade">Arcade</option>
        </>
      );
    }
  };

  const selectGenre = (genre) => {
    const otherGenres = genres.filter((g) => g !== genre);

    return (
      <>
        <option value={genre}>{genre}</option>;
        {otherGenres.map((og) => (
          <option value={og}>{og}</option>
        ))}
      </>
    );
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/games/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete game");
      console.log("Game Deleted:", id);

      setModal("");
      fetchGames();
    } catch (error) {
      console.error("Error deleting:", error.message);
    }
  };

  const handleEditChange = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const items = {
      name: fd.get("name"),
      genre: fd.get("genre"),
      platform: fd.get("platform"),
      img: fd.get("img"),
      alt: fd.get("alt"),
      url: fd.get("url"),
      status: fd.get("status") === "on",
    };

    try {
      const res = await fetch(`http://localhost:4000/api/games/${game.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(items),
      });

      if (!res.ok) throw new Error("Failed to update game");
      console.log("Game Updated:", game.name);

      setModal("");
      fetchGames();
    } catch (error) {
      console.error("Error updating:", error.message);
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200 rounded w-[350px] shadow-[5px_4px_0px_rgb(0_0_0_/_1)] ">
        <div className="flex rounded-t h-10 w-full justify-between bg-purple-500 items-center px-3 text-white">
          <button
            onClick={() => setDeleteModal(true)}
            className="flex text-sm justify-center items-center rounded text-yellow-900 hover:bg-yellow-300 hover:text-red-400 bg-yellow-200 w-6 h-6 font-bold active:bg-yellow-300 shadow-[0px_3px_0px_rgb(0_0_0_/_1)] hover:shadow-[0px_0px_0px_rgb(252_200_0_/_1)] transition"
          >
            <FaTrashAlt className="" />
          </button>
          <div className="flex items-center gap-1">
            <FaEdit />
            <p className="font-semibold">EDIT</p>
          </div>

          <button
            className="w-6 h-6 shadow-[0px_3px_0px_rgb(0_0_0_/_1)] hover:shadow-none bg-red-400 hover:bg-red-500 rounded transition flex justify-center items-center"
            onClick={() => setModal("")}
          >
            <IoClose />
          </button>
        </div>

        <form onSubmit={handleEditChange} className="flex flex-col gap-2 p-5">
          <img src={game.img} alt={game.alt} className="rounded bg-black/30" />

          <div className="flex text-xs">
            <button
              className={`h-5 px-2 rounded-l-md ${
                editDisplay === "basic"
                  ? "bg-yellow-400 shadow-[0px_3px_0px_rgb(239_177_0_/_1)]"
                  : "bg-yellow-200 shadow-[0px_6px_0px_rgb(252_200_0_/_1)] text-black/50 hover:text-black/50 hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition"
              }`}
              type="button"
              onClick={() => setEditDisplay("basic")}
            >
              Basic
            </button>
            <button
              className={`h-5 px-2 rounded-r-md ${
                editDisplay === "advanced"
                  ? "bg-yellow-400 shadow-[0px_3px_0px_rgb(239_177_0_/_1)]"
                  : "bg-yellow-200 shadow-[0px_6px_0px_rgb(252_200_0_/_1)] text-black/50 hover:text-black/50 hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition"
              }`}
              type="button"
              onClick={() => setEditDisplay("advanced")}
            >
              Advanced
            </button>
          </div>
          <div
            className={`${
              editDisplay === "basic" ? "block" : "hidden"
            } flex flex-col gap-3 h-[300px]`}
          >
            <label>
              <p className="text-xs mb-1">name</p>
              <input
                name="name"
                defaultValue={game.name}
                type="text"
                className="w-full rounded-full px-3 py-2 bg-purple-100  hover:bg-white hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
              />
            </label>

            <label htmlFor="">
              <p className="text-xs mb-1">platform</p>
              <select
                name="platform"
                className="w-full rounded-full px-3 py-2 bg-purple-100  hover:bg-white hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
              >
                {selectPlatform()}
              </select>
            </label>

            <label htmlFor="">
              <p className="text-xs mb-1">genre</p>
              <select
                name="genre"
                className="w-full rounded-full px-3 py-2 bg-purple-100  hover:bg-white hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
              >
                {selectGenre(game.genre)}
              </select>
            </label>

            <label htmlFor="">
              <p className="text-xs mb-1">image location</p>
              <input
                type="text"
                name="img"
                defaultValue={game.img}
                className="w-full rounded-full px-3 py-2 bg-purple-100  hover:bg-white hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
              />
            </label>
          </div>

          <div
            className={`${
              editDisplay === "advanced" ? "block" : "hidden"
            } flex flex-col gap-3 h-[300px]`}
          >
            <label htmlFor="">
              <p className="text-xs mb-1">status</p>
              <div className="flex items-center bg-purple-100 gap-3 px-3 py-2 rounded-full hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] hover:bg-white focus:bg-white transition">
                <p>Active: </p>
                <input
                  type="checkbox"
                  name="status"
                  checked={game.status}
                  onChange={(e) =>
                    setSelectedGame((prev) => ({
                      ...prev,
                      status: e.target.checked,
                    }))
                  }
                />
              </div>
            </label>
            <label htmlFor="">
              <p className="text-xs mb-1">image alt text</p>
              <input
                type="text"
                name="alt"
                defaultValue={game.alt}
                className="w-full rounded-full px-3 py-2 bg-purple-100  hover:bg-white hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
              />
            </label>
            <label htmlFor="">
              <p className="text-xs mb-1">video link</p>
              <input
                type="text"
                name="url"
                defaultValue={game.url}
                className="w-full rounded-full px-3 py-2 bg-purple-100  hover:bg-white hover:shadow-[0px_6px_0px_rgb(218_178_255_/_1)] focus:shadow-[0px_6px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-30 mx-auto bg-emerald-200 px-2 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_2px_0px_rgb(0_212_146_/_1)] hover:bg-emerald-300 transition rounded"
          >
            Submit
          </button>
        </form>
        {imageModal && (
          <>
            <div className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded p-1 shadow-lg border-3 border-red-300 flex flex-col gap-3 w-fit">
              <p className="text-center">Select to change image</p>
              <input
                type="file"
                className="border border-gray-400 rounded px-3 py-2"
              />
              <button
                className="bg-red-300 rounded py-1 hover:bg-red-500"
                onClick={() => setImageModal(false)}
              >
                Cancel
              </button>
            </div>
          </>
        )}
        {deleteModal && (
          <>
            <div className="h-[40%] border-2 border-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 rounded p-1 flex flex-col justify-center w-[90%] text-center gap-3 shadow-lg">
              <div>
                <p>Are you sure you want to delete?</p>
                <p className="text-sm italic">this is a permanent action</p>
              </div>

              <p className="font-bold">{game.name}</p>

              <div className="flex justify-center gap-3">
                <button
                  className="w-30 bg-emerald-200 px-2 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_2px_0px_rgb(0_212_146_/_1)] hover:bg-emerald-300 transition rounded"
                  onClick={() => handleDelete(game.id)}
                >
                  YES
                </button>
                <button
                  className="w-30 text-white bg-red-400 hover:bg-red-500 py-1 font-semibold hover:shadow-[0px_2px_0px_rgb(251_44_54_/_1)] shadow-[0px_6px_0px_rgb(251_44_54_/_1)] transition rounded"
                  type="button"
                  onClick={() => setDeleteModal(false)}
                >
                  NO
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditGame;
