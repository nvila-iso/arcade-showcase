import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import listView from "../../assets/list-view.svg";
import gridView from "../../assets/grid-view.svg";
import ListView from "../../components/Admin/ListView.jsx";
import GridView from "../../components/Admin/GridView.jsx";
import Search from "../../components/Admin/Search.jsx";
import EditGame from "../../components/Admin/EditGame.jsx";
import AddGame from "../../components/Admin/AddGame.jsx";
import Filters from "../../components/Admin/Filters.jsx";

const genres = [
  "Fighting",
  "Rhythm",
  "Light Gun",
  "STG (Shmups)",
  "Beat-Em-Ups",
  "Puzzle",
  "Platformer",
  "EXA-Arcadia STGs",
  "Other",
];

const AdminPanel = () => {
  const [allGames, setAllGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token, logout } = useAuth();
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newGameModal, setNewGameModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [modal, setModal] = useState("");

  const navigate = useNavigate();
  const [itemsDisplay, setItemsDisplay] = useState("list");

  // Check if user is authorized
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Load Games
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

  // Search functionality
  const handleSearch = (s) => {
    setSearchQuery(s);
  };

  const handleGenre = (g) => {
    setSelectedGenre(g);
  };

  const handlePlatform = (p) => {
    setSelectedPlatform(p);
  };

  const filteredGames = allGames.filter((game) => {
    const matchesSearch = game.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre = game.genre?.includes(selectedGenre);
    const matchesPlatform = game.platform?.includes(selectedPlatform);

    return matchesSearch && matchesGenre && matchesPlatform;
  });

  // Modal Handling
  const handleModal = () => {
    console.log(modal);
    if (modal === "new") {
      return (
        <AddGame fetchGames={fetchGames} genres={genres} setModal={setModal} />
      );
    } else if (modal === "edit") {
      return (
        <EditGame
          setModal={setModal}
          game={selectedGame}
          fetchGames={fetchGames}
        />
      );
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 overflow-hidden">
        <div className="flex flex-col gap-3 border-3 border-white w-full h-full rounded bg-white/40 backdrop-blur-sm px-2 py-2">
          <div className="flex justify-between items-center">
            <Search onSearch={handleSearch} />
            <Filters
              genres={genres}
              handleGenre={handleGenre}
              handlePlatform={handlePlatform}
            />

            <div className="flex gap-3 items-center">
              <button
                className="border-1 border-purple-500 bg-purple-200 w-8 h-8 font-bold hover:bg-purple-500 hover:text-white transition"
                onClick={() => setModal("new")}
              >
                +
              </button>
              <img
                src={listView}
                alt=""
                className={`h-8 ${
                  itemsDisplay === "list"
                    ? "bg-emerald-300 border-1 border-emerald-600"
                    : "border-1 border-emerald-800/50 bg-emerald-300/50 hover:border-1 hover:bg-emerald-300 hover:border-emerald-600 transition"
                }`}
                onClick={() => setItemsDisplay("list")}
              />
              <img
                src={gridView}
                alt=""
                className={`h-8 ${
                  itemsDisplay === "grid"
                    ? "bg-emerald-300 border-1 border-emerald-600"
                    : "border-1 border-emerald-800/50 bg-emerald-300/50 hover:border-1 hover:bg-emerald-300 hover:border-emerald-600 transition"
                }`}
                onClick={() => setItemsDisplay("grid")}
              />
              <div className="flex justify-center items-center ">
                <div className="w-[2px] h-6 bg-emerald-300"></div>
              </div>
              <button
                className="border-1 border-purple-500 bg-purple-200 font-semibold px-2 py-1 hover:bg-purple-500 transition hover:text-white"
                onClick={logout}
              >
                logout
              </button>
            </div>
          </div>

          {/* GAMES TABLE */}
          <div className="overflow-auto flex justify-center max-w-full">
            {itemsDisplay === "list" ? (
              <ListView
                allGames={filteredGames}
                setModal={setModal}
                setSelectedGame={setSelectedGame}
              />
            ) : (
              <GridView
                allGames={filteredGames}
                setOpenEdit={setOpenEdit}
                setSelectedGame={setSelectedGame}
              />
            )}
          </div>
        </div>
      </div>
      {handleModal()}
      {/* {openEdit && (
        <EditGame
          setOpenEdit={setOpenEdit}
          game={selectedGame}
          fetchGames={fetchGames}
        />
      )}
      {newGameModal && (
        <AddGame
          setNewGameModal={setNewGameModal}
          fetchGames={fetchGames}
          genres={genres}
        />
      )} */}
    </>
  );
};

export default AdminPanel;
