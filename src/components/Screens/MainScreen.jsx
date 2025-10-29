import { Link } from "react-router";
import arcade from "../../assets/arcade.svg";
import pinball from "../../assets/pinball.svg";

import ScreenLayout from "../../layouts/ScreenLayout";

const MainScreen = () => {
  return (
    <>
      <ScreenLayout>
        <div className="flex flex-col justify-center items-center gap-2 px-10 text-white text-center mx-auto">
          <p className="text-2xl text-teal-400 font-semibold">
            SELECT YOUR DESTINATION
          </p>
          <div className="flex flex-col  gap-2 md:flex-row text-teal-400 text-lg font-semibold ">
            <Link to="/pinball" className="">
              <div className="flex flex-col bg-black/30 border-2 border-teal-400 rounded-sm w-64 h-96">
                <div>
                  <p>PINBALL</p>
                  <hr className="w-[70%] mx-auto" />
                </div>
                <img src={pinball} alt="arcade image" className="h-[80%]" />
              </div>
            </Link>
            <div className="flex flex-col bg-black/30 border-2 border-teal-400 rounded-sm w-64 h-96">
              <div>
                <p>VIDEO GAMES</p>
                <hr className="w-[80%] mx-auto" />
              </div>

              <img src={arcade} alt="arcade image" className="h-[70%]" />
            </div>
          </div>
          <div className="flex justify-center gap-5 w-full text-teal-400">
            <Link
              to="/"
              className="border-2 border-teal-400 rounded-sm px-2 py-1 bg-black/80"
            >
              <p>Pricing & Hours</p>
            </Link>
            <Link
              to="/"
              className="border-2 border-teal-400 rounded-sm px-2 py-1 bg-black/80"
            >
              <p>Arcade Commandments</p>
            </Link>
            <Link
              to="/"
              className="border-2 border-teal-400 rounded-sm px-2 py-1 bg-black/80"
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
