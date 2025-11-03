import { Link } from "react-router";

import character from "../assets/arcade-character.webp";
import logo from "../assets/lostark-main-logo.png";

const Pricing = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 overflow-hidden">
        <div className="bg-black/20 border-2 border-black rounded-t-lg w-full max-w-4xl flex justify-center items-center gap-5 flex-shrink-0 px-5 h-20">
          <Link to="/home">
            <p className="text-white font-bold text-2xl hover:text-[#E4494F] transition">
              HOME
            </p>
          </Link>
          <Link to="">
            <img src={logo} alt="" className="w-40 relative bottom-10" />
          </Link>

          <Link to="/games">
            <p className="text-white font-bold text-2xl hover:text-[#E4494F] transition">
              GAMES
            </p>
          </Link>
        </div>

        <div className="w-full bg-[#FDB827] border-l-2 border-r-2 border-b-2 rounded-b-lg  max-w-4xl flex flex-col flex-1 min-h-0 texture justify-center items-center">
          <div className="w-[90%] sm:w-[50%] h-35 bg-[#E4494F] flex flex-col justify-center items-center rounded-xl border-5 texture">
            <p className="text-6xl font-black text-fuchsia-400 price-stroke text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] ">
              ARCADIA
            </p>
            <p className="text-4xl font-black text-sky-300 text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
              PRICING
            </p>
          </div>
          <div className="flex justify-evenly mt-1 gap-3">
            <div className="w-45 bg-[#D7036B] text-center border-3 rounded-lg py-3 texture">
              <p className="text-2xl font-semibold text-[#F7E5B9]">
                DAILY ENTRY:
              </p>
              <p className="text-5xl font-black text-[#F7E5B9] text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
                $15
              </p>
            </div>
            <div className="w-45 bg-[#D7036B] text-center border-3 rounded-lg py-3 texture">
              <p className="text-2xl font-semibold text-[#F7E5B9]">SATURDAY:</p>
              <p className="text-5xl font-black text-[#F7E5B9] text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
                $20
              </p>
            </div>
          </div>
          <p className="italic font-semibold p-2 text-center">
            ALL must pay admission. Leave your meek indifference outside - we
            have no need of it.
          </p>
          <p className="text-xl w-[76%] md:w-[50%] text-center rounded-t-lg font-black bg-blue-500 text-sky-200 px-5 py-1 border-x-3 border-t-3 border-black">
            HOURS
          </p>
          <div className="bg-[#E4494F] md:w-[50%] p-2 rounded-b-lg font-semibold border-x-3 border-b-3 border-black texture text-[#F7E5B9] shadow-[0_5px_0px_rgba(0,0,0,1)] mb-5">
            <p>
              <strong>Thursday & Friday:</strong> 3PM - 12AM (midnight)
            </p>
            <p>
              <strong>Saturday:</strong> 1PM - 12AM (midnight)
            </p>
            <p>
              <strong>Sunday:</strong> 1PM - 6PM
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[50%] mb-5">
            <p className="text-xl w-full text-center rounded-t-lg font-black bg-blue-500 text-sky-200 px-5 py-1 border-x-3 border-t-3 border-black">
              MEMBERSHIP & BULK INFO
            </p>
            <div className="bg-[#E4494F] w-full p-2 rounded-b-lg font-semibold border-x-3 border-b-3 texture mb-5 shadow-[0_5px_0px_rgba(0,0,0,1)]">
              <p className="font-semibold text-lg text-[#F7E5B9] text-center">
                AVAILABLE UPON REQUEST
              </p>
            </div>

            <p className="text-xl w-full text-center rounded-t-lg font-black bg-blue-500 text-sky-200 px-5 py-1 border-x-3 border-t-3 border-black ">
              COMMANDMENTS OF ARCADIA
            </p>
            <div className="bg-[#E4494F] w-full p-2 rounded-b-lg font-semibold border-x-3 border-b-3 border-black texture text-[#F7E5B9] shadow-[0_5px_0px_rgba(0,0,0,1)]">
              <p>💀 NONE UNDER 18 PERMITTED</p>
              <p> 💀 NO CASH ACCEPTED</p>
              <p>💀 NO ALCOHOL - ONLY HIGH SCORES</p>
              <p>💀 NO MERCY FOR THE MEEK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
