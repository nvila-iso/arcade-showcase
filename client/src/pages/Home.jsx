import { Link } from "react-router";
import arcadiaLogo from "../assets/arcadiamanor-logo.png";
import Navbar from "../components/Client/Navbar.jsx";

import character from "../assets/character-home.png";

const Home = () => {
  return (
    <div className="mx-auto py-10 px-1 flex flex-col overflow-hidden justify-center items-center h-screen">
      <div className="flex flex-col gap-5 items-center relative bottom-[20%] sm:bottom-[30%]">
        <h1 className="py-3 w-xs text-3xl flex items-center justify-center rounded-full bg-red-400 text-center text-white shadow-[0px_6px_0px_rgb(251_44_54_/_1)] hover:shadow-[0px_2px_0px_rgb(251_44_54_/_1)] font-black transition">
          ARCADIA MANOR
        </h1>
        <Navbar />
      </div>
      {/* HIDDEN */}
      <div className="hidden text-sm flex rounded-full row-1 col-span-3">
        <p className="">
          This unique space is an arcade experience like none other. Presented
          by, and located beside Lost Ark Video Games, Arcadia Manor presents an
          eclectic mixture of nostalgic favorites and exotic oddities.
        </p>
        <p>
          Specializing in rarities from the Japanese arcade scene, you are sure
          to discover something new.
        </p>
        <p>
          Our pricing model features a flat rate membership, allowing the
          adventurous to try everything we offer.{" "}
        </p>
        <p>
          Not for the casual bar hopper or idle youth, Arcadia Manor is for
          explorers in the further regions of experience.
        </p>
      </div>

      <div className="relative top-[20%] sm:top-[15%] flex flex-col items-center gap-5 ">
        <div className="w-full flex flex-col bg-black text-white rounded shadow-sm rounded">
          <div className="text-center">
            <p className="text-2xl w-full py-1 bg-red-400 font-black rounded-t">
              OPERATING HOURS
            </p>
            <div className="py-2 font-semibold px-2">
              <p>THURS & FRI: 3PM - 12AM (MIDNIGHT)</p>
              <hr className="my-2" />
              <p>SATURDAY: 1PM - 12AM (MIDNIGHT)</p>
              <hr className="my-2" />
              <p>SUNDAY: 1PM - 6PM</p>
            </div>
          </div>
        </div>
        <Link
          to="/info"
          className="scale-115 mx-auto w-30 h-8 text-center rounded bg-yellow-200 text-yellow-900 hover:text-red-400 hover:bg-yellow-300 py-1 font-semibold shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition cursor-pointer"
        >
          MORE INFO
        </Link>
      </div>

      <img
        src={character}
        alt=""
        className="absolute bottom-0 -z-1 max-h-[90%]"
      />
    </div>
  );
};

export default Home;
