const JoystickFooter = () => {
  return (
    <>
      <div className="bg-blue-500 mx-auto w-full md:max-w-5xl h-30 overflow-hidden">
        
        <div className="flex justify-center items-center gap-3">
          <div className="mt-3 w-24 h-12 rounded-[50%/50%] bg-radial-[at_50%_40%] from-white to-gray-300 to-95% flex justify-center items-center inset-shadow-sm inset-shadow-black/20 shadow-[0_5px_0px_rgba(227,227,227,1)] hover:translate-y-[3px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3),0_2px_0_rgba(227,227,227,1),0_6px_8px_rgba(0,0,0,0.0)]">
            <p className="text-zinc-600">home</p>
          </div>
          <div className="mt-3 w-24 h-12 rounded-[50%/50%] bg-radial-[at_50%_40%] from-white to-gray-300 to-95% flex justify-center items-center inset-shadow-sm inset-shadow-black/20 shadow-[0_5px_0px_rgba(227,227,227,1)] hover:translate-y-[3px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3),0_2px_0_rgba(227,227,227,1),0_6px_8px_rgba(0,0,0,0.0)]">
            <p className="text-zinc-600">contact</p>
          </div>
        </div>
        <div className="flex items-center">
          <div
            id="ball-top"
            className="wiggle w-30 h-30 rounded-full relative left-[5%] md:left-[10%] bg-radial-[at_25%_25%] from-red-200 to-red-600 to-70%"
          ></div>
          <div className="relative left-[25%] md:left-[50%] flex gap-5">
            <div className="w-24 h-12 rounded-[50%/50%] bg-radial-[at_50%_40%] from-white to-gray-300 to-95% flex justify-center items-center inset-shadow-sm inset-shadow-black/20 shadow-[0_5px_0px_rgba(227,227,227,1)] hover:translate-y-[3px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3),0_2px_0_rgba(227,227,227,1),0_6px_8px_rgba(0,0,0,0.0)]"></div>
            <div className="relative bottom-3 w-24 h-12 rounded-[50%/50%] bg-radial-[at_50%_40%] from-white to-gray-300 to-95% flex justify-center items-center inset-shadow-sm inset-shadow-black/20 shadow-[0_5px_0px_rgba(227,227,227,1)] hover:translate-y-[3px] hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.3),0_2px_0_rgba(227,227,227,1),0_6px_8px_rgba(0,0,0,0.0)]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoystickFooter;
