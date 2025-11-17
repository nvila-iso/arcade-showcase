const Filters = ({
  selectedPlatform,
  selectedGenre,
  setSelectedGenre,
  setSelectedPlatform,
}) => {
  const platforms = ["Arcade", "Pinball"];
  const genres = [
    "Fighting",
    "Rhythm",
    "Light Gun",
    "STG (Shmups)",
    "Beat-Em-Ups",
    "Puzzle",
    "Platformer",
    "Other",
  ];
  return (
    <div className="grid grid-cols-2 gap-5 flex-shrink-0 mx-auto">
      <select
        className="w-full rounded px-3 py-2 bg-purple-300 shadow-[0px_6px_0px_rgb(194_122_255_/_1)] hover:shadow-[0px_3px_0px_rgb(194_122_255_/_1)] hover:bg-white focus:shadow-[0px_0px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
      >
        <option value="">--All Platforms</option>
        {platforms.map((p, i) => (
          <option key={i} value={p}>
            {p}
          </option>
        ))}
      </select>
      <select
        className="w-full rounded px-3 py-2 bg-purple-300 shadow-[0px_6px_0px_rgb(194_122_255_/_1)] hover:shadow-[0px_3px_0px_rgb(194_122_255_/_1)] hover:bg-white focus:shadow-[0px_0px_0px_rgb(194_122_255_/_1)] focus:bg-white transition"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">--All Genres</option>
        {genres.map((g, i) => (
          <option key={i} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
