const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className="border-2 border-purple-500 bg-purple-200 rounded-full px-2 py-1 shadow-[4px_3px_0px_rgb(226_77_93_/_1)]"
        placeholder="Search..."
      />
    </>
  );
};

export default Search;
