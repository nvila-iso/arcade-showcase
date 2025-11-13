import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FaTrashAlt } from "react-icons/fa";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200 rounded w-[350px] border-3 border-purple-800 shadow-[5px_4px_0px_rgb(0_0_0_/_1)] ">
        <div className="flex h-10 w-full justify-between bg-purple-500 items-center px-3 text-white">
          <button onClick={() => setDeleteModal(true)}>
            <FaTrashAlt className="hover:text-red-500 transition" />
          </button>
          <p className="font-semibold">Edit</p>
          <button
            className="w-6 h-6 shadow-[4px_3px_0px_rgb(0_0_0_/_1)] hover:shadow-none bg-red-400 hover:bg-red-500 transition"
            onClick={() => setModal("")}
          >
            X
          </button>
        </div>

        <form onSubmit={handleEditChange} className="flex flex-col gap-2 p-5">
          <img src={game.img} alt={game.alt} className="rounded bg-black/30" />

          <div className="flex text-xs">
            <button
              className={`${
                editDisplay === "basic"
                  ? "bg-blue-300 text-blue-700 font-semibold border-l-2"
                  : "bg-sky-400 text-blue-600 hover:text-blue-800 transition"
              } px-2 py-1`}
              type="button"
              onClick={() => setEditDisplay("basic")}
            >
              Basic
            </button>
            <button
              className={`${
                editDisplay === "advanced"
                  ? "bg-yellow-300 text-yellow-700 font-semibold border-r-2"
                  : "bg-yellow-400 text-yellow-600 hover:text-yellow-800 transition"
              } px-2 py-1`}
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
                className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              />
            </label>

            <label htmlFor="">
              <p className="text-xs mb-1">platform</p>
              <select
                name="platform"
                className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              >
                {selectPlatform()}
              </select>
            </label>

            <label htmlFor="">
              <p className="text-xs mb-1">genre</p>
              <select
                name="genre"
                className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
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
                className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
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
              <div className="flex items-center gap-3 border-2 border-purple-500 px-3 py-2 rounded shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white focus:bg-white transition">
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
                className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              />
            </label>
            <label htmlFor="">
              <p className="text-xs mb-1">video link</p>
              <input
                type="text"
                name="url"
                defaultValue={game.url}
                className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-30 mx-auto bg-emerald-200 px-2 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_0px_0px_rgb(0_212_146_/_1)] hover:bg-emerald-300 transition rounded"
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
            <div className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200 rounded p-1 flex flex-col justify-center w-full text-center gap-3">
              <div>
                <p>Are you sure you want to delete?</p>
                <p className="text-sm italic">this is a permanent action</p>
              </div>

              <p className="font-bold">{game.name}</p>

              <div className="flex justify-center gap-3">
                <button
                  className="bg-emerald-500 hover:bg-emerald-400 py-1 w-30 font-semibold shadow-[0px_0px_0px_rgb(0_153_102_/_1)] hover:shadow-[0px_6px_0px_rgb(0_153_102_/_1)] transition"
                  onClick={() => handleDelete(game.id)}
                >
                  YES
                </button>
                <button
                  className="text-white bg-red-500 hover:bg-red-400 py-1 w-30 font-semibold shadow-[0px_0px_0px_rgb(251_44_54_/_1)] hover:shadow-[0px_6px_0px_rgb(251_44_54_/_1)] transition"
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
