function LeaderboardSorter() {
  return (
    <div className="uppercase text-white-100 font-black 3xl:text-2xl 4xl:text-5xl hover:text-secondary transition-colors duration-300 ease-out cursor-pointer">
      <label htmlFor="leaderboard-sort">Sort By: </label>

      {/* This span is a placeholder for the sorting options. It will likely be replaced with a dropdown menu in the future. */}
      <span id="leaderboard-sort">Latest</span>
    </div>
  );
}

export default LeaderboardSorter;
