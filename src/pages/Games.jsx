import { Link } from "react-router";
import arcadeGames from "../data/arcade_games";

const Games = () => {
  const platforms = ["ARCADE", "PINBALL"];

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

  return (
    <>
      <div className="max-w-6xl flex flex-col overflow-hidden flex h-screen mx-auto justify-center px-5">
        <div className="flex justify-center items-center gap-3">
          <Link to="">
            <p className="text-white font-bold text-2xl">HOME</p>
          </Link>
          <p className="text-5xl text-orange-500 font-bold text-shadow-[3px_3px_0px_rgb(0_0_0_/_1)] bg-yellow-400 rounded-2xl border-2 border-blue-600 py-2 px-3 shadow-[0_5px_0px_rgba(0,0,0,1)]">
            GAMES
          </p>
          <Link to="">
            <p className="text-white font-bold text-2xl">EVENTS</p>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1">
          <input
            type="text"
            className="w-full h-12 rounded-full bg-white border-2 px-5"
            placeholder="SEARCH . . ."
          />
          <div className="mt-5 grid grid-cols-2 justify-center gap-5">
            <select className="border border-black px-2 h-10 bg-white rounded">
              <option value="">ALL PLATFORMS</option>
              {platforms.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <select className="border border-black px-2 h-10 bg-white rounded">
              <option value="">ALL GENRES</option>
              {genres.map((g, i) => (
                <option key={i} value={g}>{g}</option>
              ))}
            </select>
          </div>
          {/* <div className="grid grid-cols-2 gap-2 h-[20%] overflow-auto">
              {arcadeGames.map((arcade, i) => (
                <>
                <div>
                  <p>{arcade.name}</p>
                </div>
                </>
              ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Games;
