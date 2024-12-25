import { ChangeEvent } from "react";
interface LeaderboardSorterProps {
  setSortOption: (option: string) => void;
}

function LeaderboardSorter({ setSortOption }: LeaderboardSorterProps) {
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="uppercase text-white-100 font-black 3xl:text-2xl 4xl:text-5xl hover:text-secondary transition-colors duration-300 ease-out cursor-pointer">
      <label htmlFor="leaderboard-sort">Sort By: </label>
      <select id="leaderboard-sort" onChange={handleSortChange}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="atoz">A to Z</option>
        <option value="ztoa">Z to A</option>
      </select>
    </div>
  );
}

export default LeaderboardSorter;
