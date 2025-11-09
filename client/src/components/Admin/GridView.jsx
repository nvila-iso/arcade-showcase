const GridView = ({ allGames }) => {
  return (
    <>
      <div className="grid">
        {allGames.map((g) => (
          <>
            <div className="border border-zinc-300 flex flex-col justify-center items-center">
              <img src={g.img} alt={g.alt} />
              <div className="flex gap-5">
                <div className="flex gap-5">
                  <p>{g.id}</p>
                  <p>{g.name}</p>
                </div>

                {g.status === true ? (
                  <>
                    <input type="checkbox" name="" id="" checked />
                  </>
                ) : (
                  <>
                    <input type="checkbox" name="" id="" />
                  </>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default GridView;
