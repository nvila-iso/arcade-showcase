import { useAuth } from "../../context/AuthContext";

const AddGame = ({ setNewGameModal, fetchGames }) => {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded p-1 w-[300px] shadow-lg border-3 border-red-300">
        <div className="flex w-full justify-end">
          <button
            className="bg-red-400 px-2 hover:bg-red-600 transition"
            onClick={() => setNewGameModal(false)}
          >
            X
          </button>
        </div>

        <div className="mt-2">
          <form onSubmit={handleNewGamePost} className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Game Name"
              className="border w-full rounded px-2 py-1"
              required
            />
            <input
              type="text"
              name="img"
              className="border w-full rounded px-2 py-1"
              required
            />
            <input
              type="text"
              name="alt"
              placeholder="Image Alt (desc)"
              className="border w-full rounded px-2 py-1"
            />
            <input
              type="url"
              name="url"
              className="border w-full rounded px-2 py-1"
              placeholder="Youtube URL"
            />
            <select
              name="platform"
              className="border w-full rounded px-2 py-1"
              required
            >
              <option value="">--Select Platform</option>
              <option value="Arcade">Arcade</option>
              <option value="Pinball">Pinball</option>
            </select>
            <select name="genre" className="border w-full rounded px-2 py-1">
              <option value="">--Select Genre</option>
              {genres.map((g) => (
                <option value={g} key={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="flex gap-1 items-center border-1 rounded px-2 py-1">
              <p>Active: </p>
              <input type="checkbox" name="status" />
            </div>
            <button
              type="submit"
              className="bg-emerald-300 w-30 self-center py-1 rounded"
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
