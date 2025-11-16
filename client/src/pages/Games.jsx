import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import Navbar from "../components/Client/NavBar";
import Searchbar from "../components/Client/Searchbar";
import Filters from "../components/Client/Filters";

// ICONS
import { GiPinballFlipper } from "react-icons/gi";
import { BsJoystick } from "react-icons/bs";
import { FaHandBackFist } from "react-icons/fa6"; // Fighting
import { FaMusic } from "react-icons/fa"; // Rhythm
import { GiRayGun } from "react-icons/gi"; // Light Gun
import { FaSpaceAwesome } from "react-icons/fa6"; // Shmups
import { MdOutlineSportsMartialArts } from "react-icons/md"; // Beat-em
import { FaPuzzlePiece } from "react-icons/fa"; // Puzzle
import { GiLaddersPlatform } from "react-icons/gi"; // Platformer
import { FaGhost } from "react-icons/fa"; // Retired
import { GiAquarium } from "react-icons/gi"; // Other

// IMAGES
import character from "../assets/character-gaming.png";

const Games = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState([]);
  const [gameSearch, setGameSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const genreColor = (genre) => {
    let color;

    switch (genre) {
      case "Fighting":
        color = "bg-yellow-300 hover:bg-yellow-200 ";
        break;
      case "Rhythm":
        color = "bg-blue-300 hover:bg-blue-200";
        break;
      case "Light Gun":
        color = "bg-orange-300 hover:bg-orange-200";
        break;
      case "STG (Shmups)":
        color = "bg-red-300 hover:bg-red-200";
        break;
      case "Beat-Em-Ups":
        color = "bg-zinc-300 hover:bg-zinc-200";
        break;
      case "Puzzle":
        color = "bg-pink-300 hover:bg-pink-200";
        break;
      case "Platformer":
        color = "bg-purple-500 hover:bg-purple-400";
        break;
      case "EXA-Arcadia STGs":
        color = "bg-stone-300 hover:bg-stone-200";
        break;
      default:
        color = "bg-green-300 hover:bg-green-200";
        break;
    }

    return color;
  };

  const genreIcon = (genre) => {
    let icon;
    switch (genre) {
      case "Fighting":
        icon = <FaHandBackFist />;
        break;
      case "Rhythm":
        icon = <FaMusic />;
        break;
      case "Light Gun":
        icon = <GiRayGun />;
        break;
      case "STG (Shmups)":
        icon = <FaSpaceAwesome />;
        break;
      case "Beat-Em-Ups":
        icon = <MdOutlineSportsMartialArts />;
        break;
      case "Puzzle":
        icon = <FaPuzzlePiece />;
        break;
      case "Platformer":
        icon = <GiLaddersPlatform />;
        break;
      case "EXA-Arcadia STGs":
        icon = <FaGhost />;
        break;
      default:
        icon = <GiAquarium />;
        break;
    }

    return icon;
  };

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/games");
      const data = await response.json();
      setAllGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const normalize = (str) => {
    return str.toLowerCase().trim();
  };

  const baseList = useMemo(() => {
    switch (selectedPlatform) {
      case "Arcade":
        return allGames.filter((g) => g.platform === "Arcade");
      case "Pinball":
        return allGames.filter((g) => g.platform === "Pinball");
      default:
        return allGames;
    }
  }, [selectedPlatform, allGames]);

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
      <div className="w-full bg-black/10 border-2 rounded-lg max-w-4xl pt-5 px-3 pb-5 flex flex-col flex-1 min-h-0 overflow-hidden">
        <Navbar />
        <Searchbar gameSearch={gameSearch} setGameSearch={setGameSearch} />
        <Filters
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          setSelectedPlatform={setSelectedPlatform}
        />

        <div className="mx-auto mt-5 grid gap-5 md:grid-cols-2 px-10 overflow-auto min-h-0 flex-1">
          {currentGames
            .filter((g) => g.status !== false)
            .map((game, i) => (
              <div className="rounded-md flex flex-col items-center w-74 h-70 bg-purple-400 shadow-[0px_2px_1px_rgb(0_0_0_/_.5)] hover:scale-105 hover:shadow-[0px_3px_2px_rgb(0_0_0_/_.2)] transition">
                <div className="h-34 overflow-hidden bg-black w-full rounded-t-md flex justify-center items-center">
                  <img
                    src={game.img}
                    alt={game.alt}
                    className="object-center w-full"
                  />
                </div>
                <p className="p-1 shadow-sm bg-yellow-300 text-center w-full font-semibold">
                  {game.name}
                </p>

                <div className="flex justify-center scale-120 items-center gap-3 mt-5 mb-4">
                  <div className="flex items-center gap-1 bg-purple-200 hover:bg-purple-100 shadow-[0px_1px_1px_rgb(0_0_0_/_.5)] hover:shadow-[0px_0px_0px_rgb(0_0_0_/_.5)] px-2 text-sm py-1 rounded-sm transition">
                    {game.platform === "Arcade" ? (
                      <BsJoystick />
                    ) : (
                      <GiPinballFlipper />
                    )}
                    <p>{game.platform}</p>
                  </div>
                  <div
                    className={`${genreColor(
                      game.genre
                    )} rounded-sm px-2 py-1 text-sm flex items-center gap-1 shadow-[0px_1px_1px_rgb(0_0_0_/_.5)] hover:shadow-[0px_0px_0px_rgb(0_0_0_/_.5)] transition`}
                  >
                    <p>{genreIcon(game.genre)}</p>
                    <p>{game.genre}</p>
                  </div>
                </div>
                <Link to={game.url} target="_blank">
                  <button className="w-24 bg-yellow-200 text-yellow-900 hover:text-red-400 hover:bg-yellow-300 py-1 font-semibold shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] rounded transition cursor-pointer">
                    Preview
                  </button>
                </Link>
              </div>
            ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-5 flex-shrink-0">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="rounded text-yellow-900 hover:bg-yellow-300 hover:text-red-400 bg-yellow-200 px-2 font-bold active:bg-yellow-300 shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition"
          >
            Prev
          </button>

          {(() => {
            const maxVisible = 4;
            const half = Math.floor(maxVisible / 2);
            let start = Math.max(1, currentPage - half);
            let end = Math.min(totalPages, start + maxVisible - 1);

            // shift window if at the end
            if (end - start + 1 < maxVisible)
              start = Math.max(1, end - maxVisible + 1);

            const buttons = [];
            for (let i = start; i <= end; i++) {
              buttons.push(
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i
                      ? "bg-purple-400 text-white shadow-[0px_3px_0px_rgb(110_17_176_/_1)]"
                      : "bg-purple-200 shadow-[0px_6px_0px_rgb(215_178_255_/_1)] text-black/30 hover:text-black/50 hover:shadow-[0px_3px_0px_rgb(215_178_255_/_1)] transition"
                  }`}
                >
                  {i}
                </button>
              );
            }
            return buttons;
          })()}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded text-yellow-900 hover:bg-yellow-300 hover:text-red-400 bg-yellow-200 px-2 font-bold active:bg-yellow-300 shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition"
          >
            Next
          </button>
        </div>
      </div>
      {/* <img
        src={character}
        alt=""
        className="absolute hidden md:inline-block h-[60%] left-26 bottom-0 rotate-y-180"
      /> */}
    </div>
  );
};

export default Games;
