import { useState } from "react";
import LeaderboardSortDropdown from "./LeaderboardSortDropdown";

interface LeaderboardSorterProps {
  setSortOption: (option: string) => void;
}

function LeaderboardSorter({ setSortOption }: LeaderboardSorterProps) {
  const [value, setValue] = useState("latest");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setSortOption(newValue);
  };

  return (
    <div className="flex gap-1 3xl:gap-1.5 4xl:gap-3 uppercase text-white-100 font-black 3xl:text-2xl 4xl:text-5xl">
      <span>Sort By:</span>
      <LeaderboardSortDropdown value={value} onChange={handleChange} />
    </div>
  );
}

export default LeaderboardSorter;
