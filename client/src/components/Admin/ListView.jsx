import { SiApplearcade } from "react-icons/si";

const ListView = ({ allGames, setModal, setSelectedGame, toggleStatus }) => {
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
                className="odd:bg-purple-200 even:bg-purple-400 hover:bg-emerald-200 h-20 text-sm"
                key={g.id}
              >
                <td className="">{g.id}</td>
                <td className="">{g.name}</td>
                <td>{g.platform}</td>
                <td>{g.genre}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={g.status}
                    onChange={(e) => toggleStatus(g.id, e.target.checked)}
                    className="cursor-pointer"
                  />
                </td>
                <td
                  className="text-lg cursor-pointer"
                  onClick={() => {
                    setSelectedGame(g);
                    setModal("edit");
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
