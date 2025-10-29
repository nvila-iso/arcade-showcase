import { Link } from "react-router";
import { useState } from "react";

import ScreenLayout from "../../layouts/ScreenLayout";
import arcadeGames from "../../data/arcade_games";

const Arcade = () => {
  const [gameSearch, setGameSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  // Remove any games that are not active
  const activeGameList = arcadeGames.filter((a) => a.status !== false);

  const genres = [
    "Fighting",
    "Rhythm",
    "Light Gun",
    "STG (SHMUPS)",
    "Beat-Em-Ups",
    "Puzzle",
    "Platformer",
    "Other",
  ];

  // used for the search to prevent user mistakes
  const normalize = (str) => {
    return str.toLowerCase().trim();
  };

  const searchList =
    gameSearch.length > 0
      ? activeGameList?.filter((game) => {
          const name = normalize(game.name);
          const normalizedValue = normalize(gameSearch);
          return name.includes(normalizedValue);
        })
      : activeGameList;

  const filteredList =
    selectedGenre.length > 0
      ? searchList.filter((game) => game.genre === selectedGenre)
      : searchList;

  return (
    <>
      <ScreenLayout>
        <div className="flex flex-col items-center gap-2 p-10 text-white mx-auto">
          <p className="text-2xl text-teal-400 font-semibold underline">
            Arcade Games
          </p>
          <div className="w-full flex gap-2">
            {/* search bar */}
            <input
              onChange={(e) => {
                e.preventDefault();
                setGameSearch(e.target.value);
              }}
              type="text"
              placeholder="Search . . ."
              value={gameSearch}
              className="border-1 border-white rounded-md px-3 py-2 w-[80%]"
            />

            {/* filter */}
            <select
              className="w-[20%] border-1 border-white rounded-md px-2 bg-black"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Games</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {filteredList.map((arcade, index) => (
              <div key={index} className="text-center">
                <p className="text-white mb-2">{arcade.name}</p>
                <Link to={arcade.url}>
                  <img
                    src={arcade.img}
                    alt={arcade.alt}
                    className="border-2 border-white rounded-sm object-cover w-[90%] mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(49,184,247,0.8)]"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ScreenLayout>
    </>
  );
};

export default Arcade;
