const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className="bg-white/30 border-2 border-purple-400 rounded-full px-2 py-1"
        placeholder="Search..."
      />
    </>
  );
};

export default Search;
