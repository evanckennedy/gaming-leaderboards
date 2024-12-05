import { useState, useEffect } from "react";
import { formatLeaderboardData } from "@/utils/formatLeaderboardData";
import { fetchLeaderboards } from "@/services/leaderboardService";
import { sortByLatest } from "../helpers/leaderboardSorting";

export function useFetchLeaderboards() {
  const [leaderboards, setLeaderboards] = useState<
    ReturnType<typeof formatLeaderboardData>
  >([]);

  useEffect(() => {
    const getLeaderboards = async () => {
      try {
        const data = await fetchLeaderboards();
        const formattedData = formatLeaderboardData(data);
        const sortedData = sortByLatest(formattedData);
        setLeaderboards(sortedData);
      } catch (error) {
        console.error("Error fetching leaderboards", error);
      }
    };

    getLeaderboards();
  }, []);

  return leaderboards;
}
