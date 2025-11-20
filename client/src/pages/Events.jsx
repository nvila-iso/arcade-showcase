import { Link } from "react-router";
import PageTemplate from "./PageTemplate";
import events from "../data/events";
import character from "../assets/arcade-character-1.webp";

const Events = () => {
  console.log(events.length);
  return (
    <>
      <PageTemplate>
        <div className="flex justify-center items-center h-full w-full">
          {events.length - 1 === 0 ? (
            <>
              <p className="relative bottom-40 lg: flex justify-center items-center px-2 text-[#F7E5B9] text-3xl font-black text-center bg-[#E4494F] h-30 rounded-lg border-3 border-black shadow-[0_5px_0px_rgba(0,0,0,1)] texture">
                NO EVENTS SCHEDULED
              </p>
              <img src={character} alt="" className="absolute bottom-45 sm:bottom-5 max-h-[70%]"/>
            </>
          ) : (
            <>
              <div>Load events here</div>
            </>
          )}
        </div>
      </PageTemplate>
    </>
  );
};

export default Events;
