import { Link } from "react-router";

import ScreenLayout from "../../layouts/ScreenLayout";
import arcadeGames from "../../data/arcade_games";

const Arcade = () => {
  return (
    <>
      <ScreenLayout>
        <div className="flex flex-col items-center gap-2 p-10 text-white mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {arcadeGames.filter(a => a.status !== false).map((arcade, index) => (
              <div key={index} className="text-center">
                <p className="text-white mb-2">{arcade.name}</p>
                <Link to={arcade.url}>
                  <img
                    src={arcade.img}
                    alt={arcade.alt}
                    className="border-2 border-white rounded-sm object-cover w-[90%] mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(49,184,247,0.8)]"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ScreenLayout>
    </>
  );
};

export default Arcade;
