import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import catGundam from "../../assets/cat-lost-ark-gunplay-400x290.png";
import listView from "../../assets/list-view.svg";
import gridView from "../../assets/grid-view.svg";
import ListView from "../../components/Admin/ListView.jsx";
import GridView from "../../components/Admin/GridView.jsx";

const AdminPanel = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();
  const { token, user, logout } = useAuth();
  const [error, setError] = useState(null);

  const [itemsDisplay, setItemsDisplay] = useState("grid");


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
        <div className="flex flex-col gap-3 border-3 border-white max-w-5xl h-full rounded bg-white/40 backdrop-blur-sm px-2 py-1">
          <div className="flex items-center">
            <input
              type="text"
              className="w-40 bg-white/30 border border-white rounded-full px-2 py-1"
              placeholder="Search..."
            />
            <button>
              <img
                src={listView}
                alt=""
                className="h-8"
                onClick={() => setItemsDisplay("list")}
              />
            </button>

            <img
              src={gridView}
              alt=""
              className="h-8"
              onClick={() => setItemsDisplay("grid")}
            />
          </div>

          {/* GAMES TABLE */}
          <div className="overflow-auto bg-white">
            {itemsDisplay === "list" ? (
              <ListView allGames={allGames} />
            ) : (
              <GridView allGames={allGames} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
