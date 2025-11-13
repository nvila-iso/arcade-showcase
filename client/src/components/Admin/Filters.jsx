const Filters = ({ genres, handlePlatform, handleGenre }) => {
  return (
    <>
      <div className="flex gap-3">
        <select
          name="Platform"
          onChange={(e) => handlePlatform(e.target.value)}
          className="w-full rounded px-3 py-2 bg-purple-300 shadow-[0px_6px_0px_rgb(194_122_255_/_1)] hover:shadow-[0px_3px_0px_rgb(194_122_255_/_1)] hover:bg-white focus:shadow-[0px_0px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
        >
          <option value="">All Platforms</option>
          <option value="Arcade">Arcade</option>
          <option value="Pinball">Pinball</option>
        </select>
        <select
          name="Genre"
          onChange={(e) => handleGenre(e.target.value)}
          className="w-full rounded px-3 py-2 bg-purple-300 shadow-[0px_6px_0px_rgb(194_122_255_/_1)] hover:shadow-[0px_3px_0px_rgb(194_122_255_/_1)] hover:bg-white focus:shadow-[0px_0px_0px_rgb(194_122_255_/_1)]  focus:bg-white transition"
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
