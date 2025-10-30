import { Link } from "react-router";
import ScreenLayout from "./ScreenLayout";

const Marquee = () => {
  return (
    <>
      <ScreenLayout>
        <div
          id="marquee"
          className="w-full md:max-w-5xl mx-auto bg-cover flex flex-col justify-center items-center py-5 "
        >
          <Link to="/main-screen">
            {/* <div className="text-yellow-500 text-2xl text-center">Company Name</div> */}
            <div
              class="w-96 h-28 flex justify-center items-center text-[#00cc66] border-2 border-[#00ff99]
            shadow-[0_0_5px_#00ff99,0_0_10px_#00ff99,inset_0_0_8px_#00cc66]
            [text-shadow:_0_0_5px_#00ff99,_0_0_10px_#00ff99]
            bg-[#001100] px-6 py-3 rounded-md font-[Press_Start_2P] text-6xl"
            >
              ARCADE
            </div>
          </Link>
        </div>
      </ScreenLayout>
    </>
  );
};

export default Marquee;
