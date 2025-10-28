const Marquee = () => {
  return (
    <>
      <div
        id="marquee"
        className="w-full md:max-w-5xl mx-auto bg-[url('/star-bg.jpg')] bg-cover flex flex-col justify-center items-center bg-black py-5 rounded-md"
      >
        <div className="text-yellow-500 text-2xl">Company Name</div>
        <div className="text-yellow-500 text-6xl font-bold text-shadow-[0_4px_0px_rgb(0_0_0_/_1)] text-shadow-red-600">
          Arcade Name
        </div>
      </div>
    </>
  );
};

export default Marquee;
