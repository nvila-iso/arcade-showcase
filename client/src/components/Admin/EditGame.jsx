import { useState } from "react";
import trash from "../../assets/trash-can.svg";

const EditGame = ({ setOpenEdit, game }) => {
  const [image, setImage] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const genres = [
    "Fighting",
    "Rhythm",
    "Light Gun",
    "STG (Shmups)",
    "Beat-Em-Ups",
    "Puzzle",
    "Platformer",
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

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded p-1 w-[300px] shadow-lg border-3 border-red-300">
        <div className="flex justify-between">
          <button onClick={() => setDeleteModal(true)}>
            <img src={trash} alt="delete icon" className="hover:bg-red-400" />
          </button>
          <button
            className="bg-red-400 px-2 hover:bg-red-600 transition"
            onClick={() => setOpenEdit(false)}
          >
            X
          </button>
        </div>

        <form className="flex flex-col gap-3 p-5">
          <img src={game.img} alt={game.alt} className="rounded" />

          <input
            name="name"
            defaultValue={game.name}
            type="text"
            className="border border-gray-400 rounded px-3 py-2"
          />
          <select
            name="platform"
            className="border border-gray-400 rounded px-3 py-2"
          >
            {selectPlatform()}
          </select>
          <select
            name=""
            id=""
            className="border border-gray-400 rounded px-3 py-2"
          >
            {selectGenre(game.genre)}
          </select>
          <div className="flex items-center gap-3 border-1 border-gray-400 px-3 py-2 rounded">
            <p>Active: </p>
            {game.status === true ? (
              <>
                <input type="checkbox" name="" id="" checked />
              </>
            ) : (
              <>
                <input type="checkbox" name="" id="" />
              </>
            )}
          </div>
          <button
            className="bg-black text-white py-1 hover:bg-zinc-500 rounded"
            type="button"
            onClick={() => setImageModal(true)}
          >
            Change Image
          </button>
          <button className="bg-emerald-500 text-white rounded py-1 hover:bg-emerald-600">
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
            <div className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded p-1 shadow-lg border-3 border-red-300 flex flex-col justify-center w-full text-center gap-3">
              <div>
                <p>Are you sure you want to delete?</p>
                <p className="text-sm italic">this is a permanent action</p>
              </div>

              <p className="font-bold">{game.name}</p>

              <div className="flex justify-center gap-5">
                <button className="bg-emerald-300 w-20 py-1">YES</button>
                <button
                  className="bg-red-300 w-20 py-1"
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
