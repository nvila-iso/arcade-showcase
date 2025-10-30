import { Link } from "react-router";

const Games = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden flex h-screen justify-center items-center">
        <div className="flex justify-center items-center">
          <Link to="">
            <p className="text-white font-bold text-2xl">HOME</p>
          </Link>
          <p className="text-5xl text-orange-500 font-bold text-shadow-[3px_3px_0px_rgb(0_0_0_/_1)] bg-yellow-400 rounded-2xl border-2 border-blue-600 py-2 px-3 shadow-[0_5px_0px_rgba(0,0,0,1)]">GAMES</p>
          <Link to="">
            <p className="text-white font-bold text-2xl">EVENTS</p>
          </Link>
        </div>
        <div className="grid grid-col-2">
          <div id="menu">
            <div>
              <p>FILTER</p>
            </div>
          </div>
          <div id="games"></div>
        </div>
      </div>
    </>
  );
};

export default Games;
