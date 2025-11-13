import { useAuth } from "../../context/AuthContext";
import { MdGamepad } from "react-icons/md";

const AddGame = ({ setNewGameModal, fetchGames, genres, setModal }) => {
  const { token } = useAuth();

  const handleNewGamePost = async (e) => {
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

    try {
      const res = await fetch("http://localhost:4000/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to create new game");

      const data = await res.json();
      console.log("New game added:", data);
      fetchGames();
      e.target.reset();
      setNewGameModal(false);
    } catch (error) {
      console.error("Error adding new game:", error.message);
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-200 rounded w-[350px] h-[500px] border-3 border-purple-800 shadow-[5px_4px_0px_rgb(0_0_0_/_1)]">
        <div className="flex h-10 w-full justify-between bg-purple-500 items-center px-3 text-white">
          <div className="flex items-center gap-1">
            <MdGamepad />
            <p className="font-semibold">ADD NEW GAME</p>
          </div>

          <button
            className="w-6 h-6 shadow-[4px_3px_0px_rgb(0_0_0_/_1)] hover:shadow-none bg-red-400 hover:bg-red-500 transition"
            onClick={() => setModal("")}
          >
            X
          </button>
        </div>

        <div className="mt-3 mb-3 px-3 py-2">
          <form onSubmit={handleNewGamePost} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Game Name"
              className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              required
            />
            <input
              type="text"
              name="img"
              placeholder="Image URL (manual)"
              className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              required
            />
            <input
              type="text"
              name="alt"
              placeholder="Image Alt (desc)"
              className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
            />
            <input
              type="url"
              name="url"
              className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              placeholder="Youtube URL"
            />
            <select
              name="platform"
              className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
              required
            >
              <option value="">--Select Platform</option>
              <option value="Arcade">Arcade</option>
              <option value="Pinball">Pinball</option>
            </select>
            <select
              name="genre"
              className="border-2 w-full rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)] hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition"
            >
              <option value="">--Select Genre</option>
              {genres.map((g) => (
                <option value={g} key={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="flex gap-1 items-center border-2 rounded px-3 py-2 border-purple-500 shadow-[4px_3px_0px_rgb(226_77_93_/_1)]  hover:shadow-[0px_3px_0px_rgb(226_77_93_/_1)] hover:bg-white/60 focus:bg-white transition">
              <p>Active: </p>
              <input type="checkbox" name="status" />
            </div>
            <button
              type="submit"
              className="w-30 mx-auto bg-emerald-200 px-2 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_0px_0px_rgb(0_212_146_/_1)] hover:bg-emerald-300 transition rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGame;
