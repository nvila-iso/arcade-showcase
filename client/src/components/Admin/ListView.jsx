const ListView = ({ allGames, setOpenEdit, setSelectedGame }) => {
  return (
    <>
      <table className="w-full table-fixed text-center">
        <thead className="bg-emerald-300 h-10 font-semibold text-sm tracking-wider ">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>platform</th>
            <th>genre</th>
            <th>active</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {allGames.map((g) => (
            <>
              <tr
                className="odd:bg-purple-200 even:bg-purple-400 hover:bg-red-300 h-20 text-sm"
                key={g.id}
              >
                <td className="">{g.id}</td>
                <td className="w-[35%]">{g.name}</td>
                <td>{g.platform}</td>
                <td>{g.genre}</td>
                <td>
                  {g.status === true ? (
                    <>
                      <input type="checkbox" name="" id="" checked />
                    </>
                  ) : (
                    <>
                      <input type="checkbox" name="" id="" />
                    </>
                  )}
                </td>
                <td
                  className="text-lg"
                  onClick={() => {
                    setSelectedGame(g);
                    setOpenEdit(true);
                  }}
                >
                  ✏️
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListView;
