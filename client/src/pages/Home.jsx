import { Link } from "react-router";
import arcadiaLogo from "../assets/arcadiamanor-logo.png";
import Navbar from "../components/Client/NavBar";

import character from "../assets/character-home.png";

const Home = () => {
  return (
    <div className="max-w-6xl px-3 flex flex-col overflow-hidden justify-between gap-5 items-center mx-auto h-screen ">
      <h1 className="relative border border-3 rounded-full px-5 py-2 bg-red-200 top-40 text-center text-red-400 font-lilita text-5xl text-shadow-[0px_6px_0px_rgb(0_0_0_/_1)] shadow-[0px_10px_0px_rgb(0_0_0_/_1)] inset-shadow-sm inset-shadow-red-300 hover:shadow-[0px_2px_0px_rgb(0_0_0_/_1)] transition">
        ARCADIA MANOR
      </h1>
      <fieldset className="relative bottom-30 md:h-[30%] flex flex-col justify-center items-center py-5 md:px-5 border-3 border-black/80 rounded bg-black/20">
        <legend className="mx-auto">
          <Navbar />
        </legend>

        <div className="w-sm flex flex-col px-3 border-3 border-purple-800 bg-purple-300/90 text-purple-800 font-black rounded shadow-sm">
          <div className="text-center">
            <p className="text-2xl italic">OPERATING HOURS</p>
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
        
      </fieldset>
      <img src={character} alt="" className="absolute bottom-0 -z-1"/>
    </div>
  );
};

export default Home;
