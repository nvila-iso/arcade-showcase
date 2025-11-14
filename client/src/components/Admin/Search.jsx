const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="flex grow">
        <input
          type="text"
          onChange={handleChange}
          className=" h-10 mx-auto w-full bg-emerald-200 px-4 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_3px_0px_rgb(0_212_146_/_1)] hover:bg-white focus:bg-white focus:shadow-[0px_0px_0px_rgb(0_212_146_/_1)] transition rounded-full"
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default Search;
