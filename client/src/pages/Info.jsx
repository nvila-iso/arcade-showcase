import PageTemplate from "./PageTemplate";
import character from "../assets/character_heart.webp";
import logo from "../assets/arcadiamanor-logo.png";
import cat from "../assets/indi-cat.png";
import { Link } from "react-router";

const Info = () => {
  return (
    <>
      <PageTemplate>
        <div className="w-full h-full flex flex-col items-center justify-between gap-3 pb-3">
          <img
            src={character}
            alt=""
            className="absolute bottom-0 right-0 max-h-[72%] sm:max-h-[75%] md:max-h-[80%] lg:max-h-[90%] rotate-y-180 lg:z-1"
          />

          <div className="w-full sm:w-lg md:w-2xl sm:self-start lg:justify-self-center text-sm  md:text-base bg-red-100 rounded-md border-3 border-red-400 p-5 flex flex-col gap-1 shadow-sm">
            <Link
              to="https://maps.app.goo.gl/CRnde8GVLgxoMeRP6"
              className="w-xs md:w-sm text-xs md:text-sm mx-auto mb-2 text-white text-center font-semibold cursor-pointer bg-red-400 rounded-full py-2 px-3 shadow-[0px_3px_0px_rgb(251_44_54_/_1)] hover:shadow-[0px_1px_0px_rgb(251_44_54_/_1)] transition"
            >
              1701 Spring Garden St A, Greensboro, NC 27403
            </Link>
            <table className="text-xs sm:text-base py-3 rounded border-2 border-red-400 border-separate border-spacing-x-1 md:border-spacing-x-6 md:border-spacing-y-1">
              <thead>
                <tr className="text-left text-red-400 font-semibold">
                  <th>DAYS</th>
                  <th>HOURS</th>
                  <th>ENTRY FEE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Thursday & Friday</td>
                  <td>3PM - 12AM (midnight)</td>
                  <td className="font-semibold text-red-400">$15</td>
                </tr>
                <tr>
                  <td className="font-semibold">Saturday</td>
                  <td>1PM - 12AM (midnight)</td>
                  <td className="font-semibold text-red-400">$20</td>
                </tr>
                <tr>
                  <td className="font-semibold">Sunday</td>
                  <td>1PM - 6PM</td>
                  <td className="font-semibold text-red-400">$15</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs italic">
              ** membership & bulk admission available upon request
            </p>
          </div>

          <div className="sm:self-start z-2 md:w-md lg:w-lg">
            <p className="rounded-t text-lg w-full text-center font-black text-white bg-red-400 py-1 ">
              COMMANDMENTS OF ARCADIA
            </p>
            <div className="rounded-b shadow-md text-sm md:text-base bg-black px-10 py-2 font-semibold texture-surface text-white">
              <p>💀 NONE UNDER 18 PERMITTED</p>
              <hr className="my-1" />
              <p>💀 NO CASH ACCEPTED</p>
               <hr className="my-1" />
              <p>💀 NO ALCOHOL — ONLY HIGH SCORES</p>
               <hr className="my-1" />
              <p>💀 NO MERCY FOR THE MEEK</p>
            </div>
          </div>
             <img src={logo} alt="" className="-z-1 absolute top-[25%] sm:top-[12%] md:top-[6%] lg:top-[0%] w-[90%] md:w-[75%] lg:w-[80%]" />
          </div>
  
      </PageTemplate>
    </>
  );
};

export default Info;
