import { Link, useNavigate } from "react-router";

import pinballGames from "../../data/pinball_games";
import ScreenLayout from "../../layouts/ScreenLayout";

const Pinball = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScreenLayout>
        <div className="flex flex-col items-center gap-2 p-10 text-white mx-auto">
          <button onClick={() => navigate(-1)} className="text-white border-2 border-teal-400 px-5 py-1 rounded-md">
            Back
          </button>
          <p className="text-2xl text-teal-400 font-semibold underline">
            Pinball Games
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {pinballGames.map((pinball, index) => (
              <div key={index} className="text-center">
                <p className="text-white mb-2">{pinball.name}</p>
                <Link to={pinball.url}>
                  <img
                    src={pinball.img}
                    alt={pinball.alt}
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

export default Pinball;
