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

const GridView = ({ allGames, setModal, setSelectedGame, toggleStatus }) => {
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

  return (
    <>
      <div className="mt-5 grid gap-5 md:grid-cols-3 px-2">
        {allGames.map((g) => (
          <>
            <div className="rounded-md flex flex-col justify-between mx-auto items-center w-74 h-64 bg-purple-400  shadow-[0px_2px_1px_rgb(0_0_0_/_.5)] hover:scale-105 hover:shadow-[0px_3px_2px_rgb(0_0_0_/_.2)] transition">
              <div className="relative">
                <div className="absolute left-3 top-2 flex text-sm">
                  <p className="bg-yellow-300 px-2 py-1 rounded">{g.id}</p>
                </div>
                <div className="h-24 overflow-hidden bg-black rounded-t-md">
                  <img
                    src={g.img}
                    alt={g.alt}
                    className="object-cover  overflow-hidden w-full"
                  />
                </div>
                <p className="p-1 bg-yellow-300 text-center w-full font-semibold">
                  {g.name}
                </p>
              </div>

              <div className="w-full px-2 py-2 flex flex-col gap-3 justify-evenly items-center">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-purple-200 hover:bg-purple-100 shadow-[0px_1px_1px_rgb(0_0_0_/_.5)] hover:shadow-[0px_0px_0px_rgb(0_0_0_/_.5)] px-2 text-sm py-1 rounded-sm transition">
                    {g.platform === "Arcade" ? (
                      <BsJoystick />
                    ) : (
                      <GiPinballFlipper />
                    )}
                    <p>{g.platform}</p>
                  </div>
                  <div
                    className={`${genreColor(
                      g.genre
                    )} rounded-sm px-2 py-1 text-sm flex items-center gap-1 shadow-[0px_1px_1px_rgb(0_0_0_/_.5)] hover:shadow-[0px_0px_0px_rgb(0_0_0_/_.5)] transition`}
                  >
                    <p>{genreIcon(g.genre)}</p>
                    <p>{g.genre}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mb-5">
                <div className="flex items-center gap-3 justify-center bg-emerald-200 px-2 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_3px_0px_rgb(0_212_146_/_1)] hover:bg-emerald-300 transition rounded">
                  <p>Active:</p>
                  <input
                    type="checkbox"
                    checked={g.status}
                    readOnly
                    onChange={(e) => toggleStatus(g.id, e.target.checked)}
                  />
                </div>
                <button
                  className="text-yellow-900 hover:text-red-400 bg-yellow-200 hover:bg-yellow-300 py-1 w-20 mx-auto font-semibold shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] rounded transition cursor-pointer"
                  onClick={() => {
                    setSelectedGame(g);
                    setModal("edit");
                  }}
                >
                  EDIT
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default GridView;
