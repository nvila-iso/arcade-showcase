const Filters = ({ genres, handlePlatform, handleGenre }) => {
  return (
    <>
      <div className="flex gap-3">
        <select
          name="Platform"
          onChange={(e) => handlePlatform(e.target.value)}
          className="w-40 border-2 border-purple-500 bg-purple-200 rounded-full px-3 py-1 shadow-[4px_3px_0px_rgb(226_77_93_/_1)]"
        >
          <option value="">All Platforms</option>
          <option value="Arcade">Arcade</option>
          <option value="Pinball">Pinball</option>
        </select>
        <select
          name="Genre"
          onChange={(e) => handleGenre(e.target.value)}
          className="w-40 border-2 border-purple-500 bg-purple-200 rounded-full px-3 py-1 shadow-[4px_3px_0px_rgb(226_77_93_/_1)]"
        >
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filters;
