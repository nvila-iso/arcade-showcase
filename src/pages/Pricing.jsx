import { Link } from "react-router";

import character from "../assets/arcade-character.webp";
import logo from "../assets/lostark-main-logo.png";

const Pricing = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center px-5 py-10 overflow-hidden">
        <div className="bg-black/20 border-2 border-black rounded-t-lg w-full max-w-4xl flex justify-center items-center gap-5 flex-shrink-0 px-5 h-20">
          <Link to="/home">
            <p className="text-white font-bold text-2xl hover:text-[#E4494F] transition">
              HOME
            </p>
          </Link>
          <Link to="">
            <img src={logo} alt="" className="w-40 relative bottom-10" />
          </Link>

          <Link to="">
            <p className="text-white font-bold text-2xl hover:text-[#E4494F] transition">
              EVENTS
            </p>
          </Link>
        </div>
        <div className="bg-[#FDB827] pt-5 px-5 w-full flex flex-col border-l-2 border-r-2 border-b-2 rounded-b-lg justify-center items-center">
          <div className="w-[90%] h-35 bg-[#E4494F] flex flex-col justify-center items-center rounded-xl border-5">
            <p className="text-6xl font-black text-fuchsia-400 price-stroke text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)]">
              ARCADIA
            </p>
            <p className="text-4xl font-black text-sky-300 text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
              PRICING
            </p>
          </div>
          <div className="flex justify-evenly mt-1 gap-3">
            <div className="w-45 bg-[#D7036B] text-center border-3 rounded-lg py-3 ">
              <p className="text-2xl font-semibold text-[#F7E5B9]">
                DAILY ENTRY:
              </p>
              <p className="text-5xl font-black text-[#F7E5B9] text-shadow-[-3px_3px_0px_rgb(0_0_0_/_1)] price-stroke">
                $15
              </p>
            </div>
            <div className="w-45 bg-[#D7036B] text-center border-3 rounded-lg py-3">
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
          <p className="text-3xl font-black text-center bg-[#E4494F] w-[90%] rounded-lg border-3  shadow-[0_5px_0px_rgba(0,0,0,1)]">
            HOURS
          </p>
          <div className="flex flex-col justify-center items-center mb-5 p-2 rounded">
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
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-xl font-black bg-blue-500 text-sky-200 px-5 py-1">
              MEMBERSHIP & BULK INFO
            </p>
            <p className="font-semibold text-lg">AVAILABLE UPON REQUEST</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 mb-5">
            <p className="text-xl font-black bg-blue-500 text-sky-200 px-5 py-1">
              COMMANDMENTS OF ARCADIA
            </p>
            <div className="bg-[#E4494F] w-full p-2 rounded-lg font-semibold border-3">
              <p className="text-[#F7E5B9]">💀 NONE UNDER 18 PERMITTED</p>
              <p className="text-[#F7E5B9]"> 💀 NO CASH ACCEPTED</p>
              <p className="text-[#F7E5B9]">
                {" "}
                💀 NO ALCOHOL - ONLY HIGH SCORES
              </p>
              <p className="text-[#F7E5B9]">💀 NO MERCY FOR THE MEEK</p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-5 mt-10 p-8 border-2 border-blue-800 bg-purple-300 text-blue-800 font-black rounded w-[90%] mx-auto md:mx-0 rounded shadow-sm">
          <p>
            This unique space is an arcade experience like no other. Presented
            by, and located beside, Lost Ark Video Games, Arcadia Manor Presents
            an eclectic mixture of nostalgic favorites and exotic oddities.
          </p>
          <p>
            Specializing in rarities from the Japanese arcade scene, you are
            sure to discover something new.
          </p>
          <p>
            Our pricing model features a flat rate membership, allowing the
            adventurous to try everything we offer. Not for the casual bar
            hopper or idle youth, Arcadia Manor is for the explorers in the
            further regions of experience.{" "}
          </p>
        </div> */}
        <img
          src={character}
          alt="lost ark logo"
          className="absolute bottom-0 mx-auto md:relative md:top-25 md:right-0 -z-10"
        />
      </div>
    </>
  );
};

export default Pricing;
