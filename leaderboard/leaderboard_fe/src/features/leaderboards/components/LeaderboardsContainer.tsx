import { useState, useEffect } from "react";
import LeaderboardsDisplay from "./LeaderboardsDisplay";
import LeaderboardSorter from "./LeaderboardSorter";
import CreateLeaderboardLink from "./CreateLeaderboardLink";
import { useFetchLeaderboards } from "../hooks/useFetchLeaderboards";
import {
  sortByLatest,
  sortByOldest,
  sortByAToZ,
  sortByZToA,
} from "../helpers/leaderboardSorting";

function LeaderboardsContainer() {
  const { leaderboards } = useFetchLeaderboards();
  const [sortedLeaderboards, setSortedLeaderboards] = useState(leaderboards);
  const [sortOption, setSortOption] = useState("latest");

  useEffect(() => {
    let sortedData;
    switch (sortOption) {
      case "latest":
        sortedData = sortByLatest([...leaderboards]);
        break;
      case "oldest":
        sortedData = sortByOldest([...leaderboards]);
        break;
      case "atoz":
        sortedData = sortByAToZ([...leaderboards]);
        break;
      case "ztoa":
        sortedData = sortByZToA([...leaderboards]);
        break;
      default:
        sortedData = leaderboards;
    }
    setSortedLeaderboards(sortedData);
  }, [leaderboards, sortOption]);

  return (
    <>
      <div className="flex justify-between mt-10 3xl:mt-14 4xl:mt-28 mb-3 3xl:mb-4 4xl:mb-9">
        <LeaderboardSorter setSortOption={setSortOption} />
        <CreateLeaderboardLink />
      </div>
      <LeaderboardsDisplay sortedLeaderboards={sortedLeaderboards} />
    </>
  );
}

export default LeaderboardsContainer;
