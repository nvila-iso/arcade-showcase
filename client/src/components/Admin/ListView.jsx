const ListView = ({ allGames }) => {
  return (
    <>
      <table className="table-fixed text-center">
        <thead className="bg-yellow-200 text-gray-700 h-10 font-semibold tracking-wider">
          <tr className="">
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>platform</th>
            <th>genre</th>
            <th>active</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {allGames.map((g) => (
            <>
              <tr className="odd:bg-zinc-200 even:bg-zinc-400 hover:bg-yellow-100 h-24 ">
                <td>{g.id}</td>
                <td className="w-[25%]">
                  <img
                    src={g.img}
                    alt={g.alt}
                    className="h-20 object-cover rounded-md"
                  />
                </td>
                <td className="w-[25%]">{g.name}</td>
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
                <td className="text-lg">✏️</td>
                <td className="text-lg">☠️</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListView;
