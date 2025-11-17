const Searchbar = ({ gameSearch, setGameSearch }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setGameSearch(e.target.value);
        }}
        value={gameSearch}
        className="w-full bg-emerald-200 px-4 py-2 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_3px_0px_rgb(0_212_146_/_1)] hover:bg-white focus:bg-white focus:shadow-[0px_0px_0px_rgb(0_212_146_/_1)] transition rounded-full"
        placeholder="Search . . ."
      />
    </>
  );
};

export default Searchbar;
