const GridView = ({ allGames, setOpenEdit, setSelectedGame }) => {
  const genreColor = (genre) => {
    let color;

    switch (genre) {
      case "Fighting":
        color = "bg-yellow-300";
        break;
      case "Rhythm":
        color = "bg-blue-300";
        break;
      case "Light Gun":
        color = "bg-orange-300";
        break;
      case "STG (Shmups)":
        color = "bg-red-300 text-sm";
        break;
      case "Beat-Em-Ups":
        color = "bg-zinc-300";
        break;
      case "Puzzle":
        color = "bg-pink-300";
        break;
      case "Platformer":
        color = "bg-purple-500";
        break;
      case "EXA-Arcadia STGs":
        color = "bg-stone-300 text-sm";
        break;
      default:
        color = "bg-green-300";
        break;
    }

    return color;
  };

  return (
    <>
      <div className="mt-5 grid gap-5 md:grid-cols-3 px-2">
        {allGames.map((g) => (
          <>
            <div className="rounded flex flex-col justify-between mx-auto items-center w-74 h-64 bg-purple-400/70 border-2 border-black/20 shadow-sm hover:scale-105 hover:shadow-lg transition">
              <div className="relative">
                <div className="absolute left-3 top-2 flex text-sm">
                  <p className="bg-yellow-300 px-2 py-1 rounded">{g.id}</p>
                </div>
                <div className="h-24 overflow-hidden bg-black">
                  <img
                    src={g.img}
                    alt={g.alt}
                    className="object-cover overflow-hidden w-full"
                  />
                </div>
                <p className="p-1 bg-yellow-300 text-center w-full font-semibold">
                  {g.name}
                </p>
              </div>

              <div className="w-full px-2 py-2 flex justify-evenly items-center">
                <div className="flex items-center gap-3 justify-center border-2 border-yellow-300 px-2 py-1 rounded">
                  <p>Active:</p>
                  <input type="checkbox" checked={g.status} readOnly />
                </div>
                <p>{g.platform}</p>
                <p className={`${genreColor(g.genre)} rounded-full px-2 py-1`}>
                  {g.genre}
                </p>
              </div>

              <button
                className="mb-2 bg-yellow-300 w-20 py-1 hover:bg-red-500 rounded"
                onClick={() => {
                  setSelectedGame(g);
                  setOpenEdit(true);
                }}
              >
                EDIT
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default GridView;
