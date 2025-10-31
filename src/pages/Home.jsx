import { Link } from "react-router";

import character from "../assets/character-home.png";

const Home = () => {
  return (
    <div className="max-w-6xl flex flex-col md:flex-row overflow-hidden flex h-screen">
      <div className="md:relative md:top-50 md:left-10">
        <Link to="">
          <p className="font-archivo text-6xl text-center md:text-left text-[#E4494F] mb-5 text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] mt-5 title">
            ARCADIA MANOR
          </p>
        </Link>
        <div className="flex font-black text-center justify-center items-center md:justify-start">
          <Link to="/home">
            <p className="rounded-l bg-yellow-400 text-blue-800 px-1 py-2 w-24 md:w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              HOME
            </p>
          </Link>
          <Link to="/games">
            <p className="bg-yellow-400 text-blue-800 px-1 py-2 w-24 md:w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              GAMES
            </p>
          </Link>
          <Link to="/pricing">
            <p className="bg-yellow-400 text-blue-800 px-1 py-2 w-24 md:w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              PRICING
            </p>
          </Link>
          <Link to="">
            <p className="rounded-r bg-yellow-400 text-blue-800 px-1 py-2 w-24 md:w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              PHOTOS
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-5 mt-10 p-8 border-2 border-blue-800 bg-purple-300 text-blue-800 font-black rounded w-[90%] mx-auto md:mx-0 ">
          {/* <div className="flex justify-between">
            <p>DAILY ENTRY: $15</p>
            <p>SATURDAY: $20</p>
          </div> */}
          <div className="text-center">
            <p className="text-2xl">OPERATING HOURS</p>
            <p>THURS & FRI: 3PM - 12AM (MIDNIGHT)</p>
            <p>SATURDAY: 1PM - 12AM (MIDNIGHT)</p>
            <p>SUNDAY: 1PM - 6PM</p>
          </div>
          <Link to="/pricing" className="w-[50%] bg-yellow-400 px-1 py-2 text-center border-2 border-blue-800 hover:bg-yellow-500 transition mx-auto">
            MORE INFO
          </Link>
        </div>

        <div className="relative top-65 md:top-10 flex w-[90%] justify-between md:justify-evenly items-center mx-auto md:mx-0">
          <Link to="/games">
            <p className="rounded w-40 bg-yellow-400 text-blue-800 border-2 border-blue-800 px-1 py-2 md:w-45 text-center font-bold text-xl hover:bg-yellow-500 transition ">
              PLAY NOW
            </p>
          </Link>
          <Link to="/pricing">
            <p className="rounded w-40 bg-yellow-400 text-blue-800 border-2 border-blue-800 px-1 py-2 md:w-45 text-center font-bold text-xl hover:bg-yellow-500 transition">
              LEARN MORE
            </p>
          </Link>
        </div>
      </div>

      <img
        src={character}
        alt=""
        className="relative bottom-15 max-w-[80%] mx-auto md:relative md:top-25 md:right-0 md:max-h-[90%] -z-10"
      />
    </div>
  );
};

export default Home;
