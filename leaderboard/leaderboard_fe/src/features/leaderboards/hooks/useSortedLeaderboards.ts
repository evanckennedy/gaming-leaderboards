import { useState, useEffect } from "react";
import { FormattedLeaderboardData } from "../helpers/leaderboardSorting";
import { useFetchLeaderboards } from "./useFetchLeaderboards";
import {
  sortByLatest,
  sortByOldest,
  sortByAToZ,
  sortByZToA,
} from "../helpers/leaderboardSorting";

export function useSortedLeaderboards() {
  const { leaderboards } = useFetchLeaderboards();
  const [sortedLeaderboards, setSortedLeaderboards] =
    useState<FormattedLeaderboardData[]>(leaderboards);
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

  return { sortedLeaderboards, setSortOption };
}
