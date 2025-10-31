import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import arcadeGames from "../data/arcade_games";
import pinballGames from "../data/pinball_games";

const Games = () => {
  const [gameSearch, setGameSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const platforms = ["Arcade", "Pinball"];
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

  const allGames = [...arcadeGames, ...pinballGames];

  const normalize = (str) => {
    return str.toLowerCase().trim();
  };

  const baseList = useMemo(() => {
    switch (selectedPlatform) {
      case "Arcade":
        return arcadeGames;
      case "Pinball":
        return pinballGames;
      default:
        return allGames;
    }
  }, [selectedPlatform]);

  const searchList =
    gameSearch.length > 0
      ? baseList.filter((game) =>
          normalize(game.name).includes(normalize(gameSearch))
        )
      : baseList;

  const filteredList =
    selectedGenre.length > 0
      ? searchList.filter((game) => game.genre === selectedGenre)
      : searchList;

  // pagination

  const itemsPerPage = 10; // display X amount of items per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentGames = filteredList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [gameSearch, selectedGenre, selectedPlatform]);

  return (
    <div className="h-screen w-full flex flex-col items-center px-5 py-10 overflow-hidden">
      {/* HEADER */}
      <div className="bg-black/20 border-2 border-black rounded-t-lg w-full max-w-4xl flex justify-center items-center gap-5 flex-shrink-0">
        <Link to="/home">
          <p className="text-white font-bold text-2xl hover:text-[#E4494F] transition">
            HOME
          </p>
        </Link>
        <p className="relative bottom-5 text-5xl text-[#E4494F] font-bold text-shadow-[3px_3px_0px_rgb(4_45_77_/_1)] bg-yellow-400 rounded-2xl border-2 border-black/80 py-2 px-3 shadow-[0_5px_0px_rgba(0,0,0,.5)]">
          GAMES
        </p>
        <Link to="">
          <p className="text-white font-bold text-2xl hover:text-[#E4494F] transition">
            EVENTS
          </p>
        </Link>
      </div>

      <div className="w-full bg-[#FDB827] border-l-2 border-r-2 border-b-2 rounded-b-lg  max-w-4xl pt-5 px-3 flex flex-col flex-1 min-h-0">
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setGameSearch(e.target.value);
          }}
          value={gameSearch}
          className="w-full h-12 rounded-full bg-white border-2 px-5 flex-shrink-0 shadow-[0_5px_2px_rgba(152,178,175,.65)]"
          placeholder="SEARCH . . ."
        />

        <div className="mt-5 grid grid-cols-2 gap-5 flex-shrink-0">
          <select
            className="border border-black px-2 h-10 bg-white rounded shadow-[0_5px_0px_rgba(152,178,175,.65)]"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="">ALL PLATFORMS</option>
            {platforms.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
          <select
            className="border border-black px-2 h-10 bg-white rounded shadow-[0_5px_0px_rgba(152,178,175,.65)]"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">ALL GENRES</option>
            {genres.map((g, i) => (
              <option key={i} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 py-5 grid grid-cols-1 gap-5 flex-1 overflow-y-auto min-h-0">
          {currentGames.map((game, i) => (
            <div
              key={i}
              className="w-[90%] h-50 shadow-[0_5px_0px_rgba(152,178,175,.65)] mx-auto flex flex-col justify-center bg-black/30 items-center text-center border-3 border-black rounded-lg hover:scale-105 hover:shadow-[0_3px_5px_rgba(152,178,175,.65)] transition"
            >
              <p className="font-semibold p-1 w-full bg-[#E4494F]">
                {game.name}
              </p>
              <img
                src={game.img}
                alt={game.alt}
                className="object-cover h-40 w-full"
              />
            </div>
          ))}
        </div>
        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-5 mb-5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-black disabled:opacity-40 hover:bg-[#E4494F] hover:text-black transition"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-[#E4494F] text-black"
                  : "text-white hover:bg-[#E4494F] transition"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-black disabled:opacity-40 hover:bg-[#E4494F] hover:text-white transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
