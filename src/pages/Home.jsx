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
          <Link to="">
            <p className="bg-yellow-400 text-blue-800 px-1 py-2 w-24 md:w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              ABOUT
            </p>
          </Link>
          <Link to="">
            <p className="rounded-r bg-yellow-400 text-blue-800 px-1 py-2 w-24 md:w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              CONTACT
            </p>
          </Link>
        </div>
        <p className="mt-10 p-8 text-4xl text-center border-2 border-blue-800 bg-purple-300 text-blue-800 font-black rounded w-[90%] mx-auto">
          WELCOME TO THE ARCADE!
        </p>
        <div className="relative top-65 flex w-[90%] justify-between items-center mx-auto">
          <Link to="">
            <p className="rounded w-40 bg-yellow-400 text-blue-800 border-2 border-blue-800 px-1 py-2 md:w-45 text-center font-bold text-xl hover:bg-yellow-500 transition ">
              PLAY NOW
            </p>
          </Link>
          <Link to="">
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
