import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import gridView from "../../assets/grid-view.svg";
import ListView from "../../components/Admin/ListView.jsx";
import GridView from "../../components/Admin/GridView.jsx";
import Search from "../../components/Admin/Search.jsx";
import EditGame from "../../components/Admin/EditGame.jsx";
import AddGame from "../../components/Admin/AddGame.jsx";
import Filters from "../../components/Admin/Filters.jsx";
import { FaListOl } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

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
          toggleStatus={toggleStatus}
          setSelectedGame={setSelectedGame}
        />
      );
    }
  };

  // Active Toggle
  const toggleStatus = async (id, newStatus) => {
    console.log(id, newStatus);
    try {
      const res = await fetch(`http://localhost:4000/api/games/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const updatedGame = await res.json();

      setAllGames((prev) =>
        prev.map((g) =>
          g.id === id ? { ...g, status: updatedGame.status } : g
        )
      );
    } catch (error) {
      console.error("Failed to toggle status:", error);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 overflow-hidden">
        <div className="flex flex-col gap-3 border-3 border-white w-full h-full rounded bg-white/40 backdrop-blur-sm px-2 py-2">
          <div className="grid grid-rows-3 gap-3">
            <Search onSearch={handleSearch} />
            <Filters
              genres={genres}
              handleGenre={handleGenre}
              handlePlatform={handlePlatform}
            />

            <div className="w-full flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  className="rounded text-yellow-900 hover:bg-yellow-300 hover:text-red-400 bg-yellow-200 w-8 h-8 font-bold active:bg-yellow-300 shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition"
                  onClick={() => setModal("new")}
                >
                  +
                </button>
                <div className="flex">
                  <button
                    className={`h-8 px-2 rounded-l-md ${
                      itemsDisplay === "list"
                        ? "bg-purple-400 text-white shadow-[0px_6px_0px_rgb(110_17_176_/_1)]"
                        : "bg-purple-200 shadow-[0px_6px_0px_rgb(215_178_255_/_1)] text-black/30 hover:text-black/50 hover:shadow-[0px_3px_0px_rgb(215_178_255_/_1)] transition"
                    }`}
                    onClick={() => setItemsDisplay("list")}
                  >
                    <FaListOl />
                  </button>

                  <button
                    className={`h-8 px-2 rounded-r-md ${
                      itemsDisplay === "grid"
                        ? "bg-purple-400 text-white shadow-[0px_6px_0px_rgb(110_17_176_/_1)]"
                        : "bg-purple-200 shadow-[0px_6px_0px_rgb(215_178_255_/_1)] text-black/30 hover:text-black/50 hover:shadow-[0px_2px_0px_rgb(215_178_255_/_1)] transition"
                    }`}
                    onClick={() => setItemsDisplay("grid")}
                  >
                    <IoGrid />
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-center ">
                  <div className="w-[2px] h-6 bg-emerald-300"></div>
                </div>
                <button
                  className="bg-yellow-200 text-yellow-900 hover:text-red-400 hover:bg-yellow-300 py-1 w-20 mx-auto font-semibold shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_2px_0px_rgb(252_200_0_/_1)] rounded transition cursor-pointer"
                  onClick={logout}
                >
                  logout
                </button>
              </div>
            </div>
          </div>

          {/* GAMES TABLE */}
          <div className="overflow-auto flex justify-center max-w-full">
            {itemsDisplay === "list" ? (
              <ListView
                allGames={filteredGames}
                setModal={setModal}
                setSelectedGame={setSelectedGame}
                toggleStatus={toggleStatus}
              />
            ) : (
              <GridView
                allGames={filteredGames}
                setModal={setModal}
                setSelectedGame={setSelectedGame}
                toggleStatus={toggleStatus}
              />
            )}
          </div>
        </div>
      </div>
      {handleModal()}
    </>
  );
};

export default AdminPanel;
