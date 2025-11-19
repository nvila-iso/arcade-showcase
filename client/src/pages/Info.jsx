import PageTemplate from "./PageTemplate";
import character from "../assets/character_heart.webp";
import logo from "../assets/arcadiamanor-logo.png";
import cat from "../assets/indi-cat.png";
import { Link } from "react-router";

const Info = () => {
  return (
    <>
      <PageTemplate>
        <div className="w-full grid grid-cols-3 grid-rows-3 gap-3">
          <img
            src={character}
            alt=""
            className="absolute bottom-0 right-0 max-h-[65%] md:max-h-[75%] lg:max-h-[90%] rotate-y-180 lg:z-1"
          />

          <div className="row-1 col-start-1 col-span-3 md:col-span-4 lg:col-span-3 lg:w-3xl bg-red-100  rounded-md border-3 border-red-400 px-10 py-5 flex flex-col gap-1 shadow-sm">
            <p className="hidden text-center text-2xl font-black text-zinc-600">
              DETAILS
            </p>
            <Link
              to="https://maps.app.goo.gl/CRnde8GVLgxoMeRP6"
              className="mx-auto mb-2 text-white text-center text-sm font-semibold cursor-pointer bg-red-400 rounded-full py-1 w-fit px-5 shadow-[0px_3px_0px_rgb(251_44_54_/_1)] hover:shadow-[0px_1px_0px_rgb(251_44_54_/_1)] transition"
            >
              1701 Spring Garden St A, Greensboro, NC 27403
            </Link>
            <table className="text-sm md:text-base py-3 rounded border-2 border-red-400 border-separate border-spacing-x-1 md:border-spacing-x-6 md:border-spacing-y-1">
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
            <p className="text-sm italic">
              ** membership & bulk admission available upon request
            </p>
          </div>

          <div className="row-2 col-start-1 col-span-2 md:justify-self-center lg:justify-self-end z-2 w-sm md:w-md lg:w-lg">
            <p className="rounded-t text-xl w-full text-center font-black text-white bg-red-400 px-5 py-1 ">
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
             <img src={logo} alt="" className="absolute bottom-20 md:bottom-10 md:left-20 lg:bottom-1 lg:left-10 -z-1 w-[400px] md:w-[500px] lg:w-[600px]" />
          </div>
          <img src={cat} alt="" className="hidden" />
  
      </PageTemplate>
    </>
  );
};

export default Info;
