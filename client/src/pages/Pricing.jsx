import Navbar from "../components/Client/NavBar";

const Pricing = () => {
  return (
    <>
    <div className="h-screen w-full flex flex-col items-center px-5 py-10 gap-5 overflow-hidden">
      <div className="w-full bg-black/10 border-2 rounded-lg max-w-4xl pt-5 px-3 pb-5 flex flex-col flex-1 min-h-0 overflow-hidden">
         <Navbar />
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
