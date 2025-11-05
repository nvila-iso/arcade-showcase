import { Link } from "react-router";
import logo from "../assets/lostark-main-logo.png";

const Pricing = () => {
  return (
    <>
      <div className="h-screen min-h-0 w-full flex flex-col justify-center items-center px-5 py-10">
        <div className="bg-black/20 border-2 border-black rounded-t-lg w-full max-w-4xl flex justify-center items-center gap-5 flex-shrink-0 px-5 h-20">
          <Link to="/">
            <p className="text-white font-bold md:text-2xl hover:text-[#E4494F] transition">
              HOME
            </p>
          </Link>

          <Link to="/">
            <img src={logo} alt="Lost Ark Video Games" className="w-40 relative bottom-5" />
          </Link>

          <Link to="/games">
            <p className="text-white font-bold md:text-2xl hover:text-[#E4494F] transition">
              GAMES
            </p>
          </Link>
        </div>

        <div className="w-full bg-[#FDB827] border-l-2 border-r-2 border-b-2 rounded-b-lg max-w-4xl flex flex-col flex-1 min-h-0 overflow-auto px-2 py-6 texture-surface ">
          <div className="w-full max-w-md mx-auto h-35 bg-[#E4494F] flex flex-col justify-center items-center rounded-xl border-5 relative">
            <p className="font-lilita text-6xl font-black text-fuchsia-400 price-stroke text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)]">
              ARCADIA
            </p>
            <p className="font-lilita text-4xl font-black text-sky-300 price-stroke text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)]">
              PRICING
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-3 md:w-[50%] mx-auto">
            <div className="bg-[#D7036B] text-center border-3 rounded-lg py-3 texture-surface flex flex-col">
              <p className="text-xl font-semibold text-[#F7E5B9] px-1">DAILY ENTRY:</p>
              <p className="font-lilita text-5xl font-black text-[#F7E5B9] text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
                $15
              </p>
            </div>
            <div className="bg-[#D7036B] text-center border-3 rounded-lg py-3 texture-surface relative">
              <p className="text-xl font-semibold text-[#F7E5B9]">SATURDAY:</p>
              <p className="font-lilita text-5xl font-black text-[#F7E5B9] text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
                $20
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto grid grid-cols-[30px_1fr] items-stretch mt-3 mb-4 border-3 rounded ">
            <p className="text-2xl font-semibold bg-black text-yellow-300 text-center leading-[30px]">
              !
            </p>
            <p className="italic font-semibold text-center text-white py-1 px-2 bg-[#E4494F]">
              ALL must pay admission. Leave your meek indifference outside — we have no need of it.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-stretch">
            {/* HOURS */}
            <div>
              <p className="text-xl text-center rounded-t-lg font-black bg-blue-500 text-sky-200 px-5 py-1 border-x-3 border-t-3 border-black max-w-md mx-auto">
                HOURS
              </p>
              <div className="bg-[#E4494F] max-w-md mx-auto p-3 rounded-b-lg font-semibold border-x-3 border-b-3 border-black texture-surface text-[#F7E5B9] shadow-[0_5px_0px_rgba(0,0,0,1)] mb-2">
                <p><strong>Thursday & Friday:</strong> 3PM – 12AM (midnight)</p>
                <p><strong>Saturday:</strong> 1PM – 12AM (midnight)</p>
                <p><strong>Sunday:</strong> 1PM – 6PM</p>
              </div>
            </div>

            {/* MEMBERSHIP INFO */}
            <div>
              <p className="text-xl text-center rounded-t-lg font-black bg-blue-500 text-sky-200 px-5 py-1 border-x-3 border-t-3 border-black max-w-md mx-auto">
                MEMBERSHIP & BULK INFO
              </p>
              <div className="bg-[#E4494F] max-w-md mx-auto p-3 rounded-b-lg font-semibold border-x-3 border-b-3 border-black texture-surface text-[#F7E5B9] shadow-[0_5px_0px_rgba(0,0,0,1)] mb-2">
                <p className="font-semibold text-lg text-center">AVAILABLE UPON REQUEST</p>
              </div>
            </div>

            {/* COMMANDMENTS */}
            <div>
              <p className="text-xl w-full text-center rounded-t-lg font-black bg-blue-500 text-sky-200 px-5 py-1 border-x-3 border-t-3 border-black max-w-md mx-auto">
                COMMANDMENTS OF ARCADIA
              </p>
              <div className="bg-[#E4494F] max-w-md mx-auto p-3 rounded-b-lg font-semibold border-x-3 border-b-3 border-black texture-surface text-[#F7E5B9] shadow-[0_5px_0px_rgba(0,0,0,1)]">
                <p>💀 NONE UNDER 18 PERMITTED</p>
                <p>💀 NO CASH ACCEPTED</p>
                <p>💀 NO ALCOHOL — ONLY HIGH SCORES</p>
                <p>💀 NO MERCY FOR THE MEEK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
