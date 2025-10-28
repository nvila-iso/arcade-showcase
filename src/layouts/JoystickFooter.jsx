const JoystickFooter = () => {
  return (
    <>
      <div className="bg-blue-500 mx-auto w-full md:max-w-5xl h-30">
        <div className="flex justify-center items-center gap-2">
          <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
            Home
          </div>
          <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
            Contact
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div
            id="ball-top"
            className="w-30 h-30 rounded-full bg-red-400 border-5 border-black"
          >
            <div
              id="ball-shine"
              className="relative top-5 left-5 -rotate-20 w-12 h-5 rounded-full bg-white/30 "
            ></div>
          </div>
          <div id="buttons" className="flex gap-2">
            <div className="bg-white border-5 h-20 w-20 rounded-full"></div>
            <div className="bg-white border-5 h-20 w-20 rounded-full"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default JoystickFooter;
