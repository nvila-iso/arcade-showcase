import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FaTrashAlt } from "react-icons/fa";

const EditGame = ({ setModal, game, fetchGames }) => {
  const [image, setImage] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

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

      setDeleteModal(false);
      setOpenEdit(false);
      fetchGames();
    } catch (error) {
      console.error("Error deleted:", error.message);
    }
  };

  const handleEditChange = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const body = {
      name: fd.get("name"),
      genre: fd.get("genre"),
      platform: fd.get("platform"),
      img: fd.get("img"),
      alt: fd.get("alt"),
      url: fd.get("url"),
      status: fd.get("status") === "on",
    };

    console.log(body);
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200 rounded w-[300px] border-3 border-purple-800 shadow-[5px_4px_0px_rgb(0_0_0_/_1)]">
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

        <form onSubmit={handleEditChange} className="flex flex-col gap-3 p-5">
          <img src={game.img} alt={game.alt} className="rounded" />

          <input
            name="name"
            defaultValue={game.name}
            type="text"
            className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
          />
          <select
            name="platform"
            className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
          >
            {selectPlatform()}
          </select>
          <select
            name="genre"
            className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
          >
            {selectGenre(game.genre)}
          </select>
          <div className="flex items-center gap-3 border-2 border-purple-500 px-3 py-2 rounded shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white focus:bg-white transition">
            <p>Active: </p>
            {game.status === true ? (
              <>
                <input type="checkbox" name="status" id="" checked />
              </>
            ) : (
              <>
                <input type="checkbox" name="status" id="" />
              </>
            )}
          </div>
          <button
            className="w-30 mx-auto border-2 border-indigo-800 bg-indigo-500 py-1 text-white font-semibold shadow-indigo shadow-xs hover:bg-indigo-600 hover:text-white/80 hover:inset-shadow-sm hover:inset-shadow-indigo-900 transition"
            type="button"
            onClick={() => setImageModal(true)}
          >
            Change Image
          </button>
          <button
            type="submit"
            className="w-30 mx-auto border-2 border-emerald-700 bg-emerald-500 py-1 text-white font-semibold shadow-emerald-600 shadow-xs hover:bg-emerald-600 hover:text-white/80 hover:inset-shadow-sm hover:inset-shadow-emerald-900 transition"
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

              <div className="flex justify-center gap-5">
                <button
                  className="w-20 border-2 border-transparent bg-emerald-500 py-1 text-white font-semibold shadow-emerald-600 shadow-xs hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400 hover:border-2 hover:border-emerald-500 transition"
                  onClick={() => handleDelete(game.id)}
                >
                  YES
                </button>
                <button
                  className="w-20 border-2 border-transparent bg-red-500 py-1 text-white font-semibold shadow-red-600 shadow-xs hover:bg-red-400 hover:shadow-lg hover:shadow-red-400 hover:border-2 hover:border-red-500 transition"
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
