import { Link } from "react-router";
import arcadiaLogo from "../assets/arcadiamanor-logo.png";
import Navbar from "../components/Client/NavBar";

import character from "../assets/character-home.png";

const Home = () => {
  return (
    <div className="max-w-6xl flex flex-col overflow-hidden justify-center items-center mx-auto h-screen">
      <div className="flex flex-col items-center gap-5">
        <p className="text-red-400 font-lilita text-5xl text-shadow-[0px_6px_0px_rgb(0_0_0_/_1)]">
          ARCADIA MANOR
        </p>
        <Navbar />

        <div className="flex flex-col p-8 border-3 border-blue-800 bg-purple-300/90 text-blue-800 font-black rounded w-[80%] shadow-md">
          <div className="text-center">
            <p className="text-2xl">OPERATING HOURS</p>
            <p>THURS & FRI: 3PM - 12AM (MIDNIGHT)</p>
            <hr className="my-2" />
            <p>SATURDAY: 1PM - 12AM (MIDNIGHT)</p>
            <hr className="my-2" />
            <p>SUNDAY: 1PM - 6PM</p>
          </div>
          <Link
            to="/pricing"
            className="mt-2 mx-auto w-30 h-8 text-center rounded bg-yellow-200 text-yellow-900 hover:text-red-400 hover:bg-yellow-300 py-1 font-semibold shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition cursor-pointer"
          >
            MORE INFO
          </Link>
        </div>
      </div>

      <img
        src={character}
        alt=""
        className="rotate-y-180 hidden md:inline absolute bottom-0 md:right-[24%] md:h-[100%] -z-1"
      />
    </div>
  );
};

export default Home;
