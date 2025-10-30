import { Link } from "react-router";

import character from "../assets/character-home.png";

const Home = () => {
  return (
    <div className="max-w-5xl flex flex-col md:flex-row overflow-hidden flex h-screen">
      <div className="md:relative md:top-50 md:left-10">
        <Link to="">
          <p className="text-8xl text-center md:text-left font-bold text-red-600 mb-5 text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)]">
            ARCADE
          </p>
        </Link>
        <div className="flex font-bold text-center justify-center items-center md:justify-start">
          <Link to="/home">
            <p className="rounded-l bg-yellow-400 text-blue-800 px-1 py-2 w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              HOME
            </p>
          </Link>
          <Link to="/games">
            <p className="bg-yellow-400 text-blue-800 px-1 py-2 w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              GAMES
            </p>
          </Link>
          <Link to="">
            <p className="bg-yellow-400 text-blue-800 px-1 py-2 w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              ABOUT
            </p>
          </Link>
          <Link to="">
            <p className="rounded-r bg-yellow-400 text-blue-800 px-1 py-2 w-30 border-2 border-blue-800 hover:bg-yellow-500 transition">
              CONTACT
            </p>
          </Link>
        </div>
        <p className="ml-1 mr-1 mt-10 p-10 text-5xl text-center border-2 border-blue-800 bg-purple-300 text-blue-800 font-bold rounded md:ml-0 md:mr-0">
          WELCOME TO THE ARCADE!
        </p>
        <div className="mt-10 flex gap-5 justify-center items-center">
          <Link to="">
            <p className="rounded bg-yellow-400 text-blue-800 border-2 border-blue-800 px-1 py-2 w-45 text-center font-bold text-xl hover:bg-yellow-500 transition">
              PLAY NOW
            </p>
          </Link>
          <Link to="">
            <p className="rounded bg-yellow-400 text-blue-800 border-2 border-blue-800 px-1 py-2 w-45 text-center font-bold text-xl hover:bg-yellow-500 transition">
              LEARN MORE
            </p>
          </Link>
        </div>
      </div>

      <img
        src={character}
        alt=""
        className="md:relative md:top-25 md:right-0 md:max-h-[90%]"
      />
    </div>
  );
};

export default Home;
