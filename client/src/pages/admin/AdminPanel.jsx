import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import catGundam from "../../assets/cat-lost-ark-gunplay-400x290.png";

const AdminPanel = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();
  const { token, user, logout } = useAuth();
  const [error, setError] = useState(null);

  // Check if user is authorized
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // load up all the games!
  useEffect(() => {
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
    fetchGames();
  }, []);

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center px-5 py-10 overflow-hidden">
        <div>
          <button className="bg-red-200 px-2 py-1" onClick={logout}>
            logout
          </button>
        </div>
        <div className="flex flex-col gap-3 border-3 border-white w-5xl h-full rounded bg-white/40 backdrop-blur-sm px-2 py-1">
          <header className="flex w-full gap-5 justify-center"></header>
          <div>
            <input type="text" className="" />
          </div>

          {/* GAMES TABLE */}

          <div className="overflow-auto bg-white">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
