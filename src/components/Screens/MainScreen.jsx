import { Link } from "react-router";
import arcade from "../../assets/arcade.svg";
import pinball from "../../assets/pinball.svg";

import ScreenLayout from "../../layouts/ScreenLayout";

const MainScreen = () => {
  return (
    <>
      <ScreenLayout>
        <div className="flex flex-col justify-center items-center gap-2 px-10 text-white text-center mx-auto p-5">
          <p className="text-2xl text-teal-400 font-semibold mb-3">
            SELECT YOUR DESTINATION
          </p>
          <div className="flex flex-col gap-5 md:flex-row text-teal-400 text-lg font-semibold mb-5">
            <Link to="/pinball" className="">
              <div className="flex flex-col bg-black/30 border-2 border-teal-400 rounded-sm w-64 h-96">
                <div>
                  <p>PINBALL</p>
                  <hr className="w-[70%] mx-auto" />
                </div>
                <img
                  src={pinball}
                  alt="arcade image"
                  className="h-[80%] mt-5"
                />
              </div>
            </Link>
            <Link to="/arcade">
              <div className="flex flex-col bg-black/30 border-2 border-teal-400 rounded-sm w-64 h-96">
                <div>
                  <p>VIDEO GAMES</p>
                  <hr className="w-[80%] mx-auto" />
                </div>

                <img src={arcade} alt="arcade image" className="h-[70%] mt-5" />
              </div>
            </Link>
          </div>
          <div className="flex justify-center gap-5 w-full text-teal-400">
            <Link
              to="/pricing"
              className="px-2 py-1 border-2 border-teal-400 rounded-sm object-cover mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(49,184,247,0.8)] hover:border-white hover:text-white"
            >
              <p>Pricing & Hours</p>
            </Link>
            <Link
              to="/pricing"
              className="px-2 py-1 border-2 border-teal-400 rounded-sm object-cover mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(49,184,247,0.8)] hover:border-white hover:text-white"
            >
              <p>Arcade Commandments</p>
            </Link>
            <Link
              to="/photos"
              className="px-2 py-1 border-2 border-teal-400 rounded-sm object-cover mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(49,184,247,0.8)] hover:border-white hover:text-white"
            >
              <p>Photo Gallery</p>
            </Link>
          </div>
        </div>
      </ScreenLayout>
    </>
  );
};

export default MainScreen;
