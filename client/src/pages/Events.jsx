import { Link } from "react-router";
import events from "../data/events";

const Events = () => {
  console.log(events.length);
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center px-5 py-10 overflow-hidden">
        <div className="bg-black/20 border-2 border-black rounded-t-lg w-full max-w-4xl flex justify-center items-center gap-5 flex-shrink-0">
          <Link to="/">
            <p className="text-white font-bold md:text-2xl hover:text-[#E4494F] transition">
              HOME
            </p>
          </Link>
          <p className="relative bottom-5 text-2xl md:text-5xl text-[#E4494F] font-bold text-shadow-[2px_2px_0px_rgb(4_45_77_/_1)] tmd:text-shadow-[3px_3px_0px_rgb(4_45_77_/_1)] bg-yellow-400 rounded-2xl border-2 border-black/80 py-2 px-3 shadow-[0_5px_0px_rgba(0,0,0,.5)]">
            EVENTS
          </p>
          <Link to="/games">
            <p className="text-white font-bold md:text-2xl hover:text-[#E4494F] transition">
              GAMES
            </p>
          </Link>
        </div>

        <div className="w-full bg-[#FDB827] border-l-2 border-r-2 border-b-2 rounded-b-lg  max-w-4xl flex flex-col flex-1 min-h-0 texture justify-center items-center px-2">
          <div>
            {events.length - 1 === 0 ? (
              <>
                <p className="flex justify-center items-center px-2 text-[#F7E5B9] text-3xl font-black text-center bg-[#E4494F] h-30 rounded-lg border-3 border-black shadow-[0_5px_0px_rgba(0,0,0,1)] texture">
                  NO EVENTS SCHEDULED
                </p>
              </>
            ) : (
              <>
                <div>Load events here</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
