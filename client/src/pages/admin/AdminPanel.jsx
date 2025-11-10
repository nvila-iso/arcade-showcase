import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import listView from "../../assets/list-view.svg";
import gridView from "../../assets/grid-view.svg";
import ListView from "../../components/Admin/ListView.jsx";
import GridView from "../../components/Admin/GridView.jsx";
import Search from "../../components/Admin/Search.jsx";
import EditGame from "../../components/Admin/EditGame.jsx";

const AdminPanel = () => {
  const [allGames, setAllGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token, user, logout } = useAuth();
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newGameModal, setNewGameModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const navigate = useNavigate();

  const [itemsDisplay, setItemsDisplay] = useState("list");

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

  // Search functionality
  const handleSearch = (s) => {
    setSearchQuery(s);
  };

  const filteredGames = allGames.filter((game) =>
    game.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 overflow-hidden">
        <div>
          <button
            className="bg-emerald-500 px-2 py-1 hover:bg-emerald-700 transition rounded text-white hover:text-white/80 font-semibold"
            onClick={logout}
          >
            logout
          </button>
        </div>

        <div className="flex flex-col gap-3 border-3 border-white w-full h-full rounded bg-white/40 backdrop-blur-sm px-2 py-2">
          <div className="flex justify-between items-center">
            <Search onSearch={handleSearch} />

            <div className="flex gap-3">
              <button
                className="bg-purple-300 w-8 h-8 font-bold hover:bg-purple-500 hover:text-white transition"
                onClick={() => setNewGameModal(true)}
              >
                +
              </button>
              <img
                src={listView}
                alt=""
                className={`h-8 ${
                  itemsDisplay === "list" ? "bg-emerald-300" : ""
                }`}
                onClick={() => setItemsDisplay("list")}
              />
              <img
                src={gridView}
                alt=""
                className={`h-8 hover:bg-emerald-300 ${
                  itemsDisplay === "grid" ? "bg-emerald-300" : ""
                }`}
                onClick={() => setItemsDisplay("grid")}
              />
            </div>
          </div>

          {/* GAMES TABLE */}
          <div className="overflow-auto flex justify-center max-w-full">
            {itemsDisplay === "list" ? (
              <ListView
                allGames={filteredGames}
                setOpenEdit={setOpenEdit}
                setSelectedGame={setSelectedGame}
              />
            ) : (
              <GridView allGames={filteredGames} />
            )}
          </div>
        </div>
      </div>
      {openEdit && <EditGame setOpenEdit={setOpenEdit} game={selectedGame} />}
    </>
  );
};

export default AdminPanel;
