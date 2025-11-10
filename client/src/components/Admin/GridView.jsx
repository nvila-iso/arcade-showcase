const GridView = ({ allGames }) => {
  return (
    <>
      <div className="grid gap-10 md:grid-cols-3 px-2">
        {allGames.map((g) => (
          <>
            <div className="rounded flex flex-col mx-auto items-center w-80 h-60 bg-white">
              <div>
                <img src={g.img} alt={g.alt} />
                <p className="p-1 bg-yellow-300 rounded-b-md text-center">{g.name}</p>
              </div>
              <div className="grid grid-cols-2 items-center w-full px-2 py-1">

              </div>
              <div className="flex gap-5">
                <button className="bg-yellow-300 w-20 py-1 hover:bg-red-500 rounded">
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
