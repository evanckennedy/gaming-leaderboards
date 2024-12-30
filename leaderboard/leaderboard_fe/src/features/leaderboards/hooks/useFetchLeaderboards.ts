import { useState, useEffect } from "react";
import { formatLeaderboardData } from "@/utils/formatLeaderboardData";
import { fetchLeaderboards } from "@/services/leaderboardService";

export function useFetchLeaderboards() {
  const [leaderboards, setLeaderboards] = useState<
    ReturnType<typeof formatLeaderboardData>
  >([]);

  async function getLeaderboards() {
    try {
      const data = await fetchLeaderboards();
      const formattedData = formatLeaderboardData(data);
      setLeaderboards(formattedData);
    } catch (error) {
      console.error("Error fetching leaderboards", error);
    }
  }

  useEffect(() => {
    getLeaderboards();
  }, []);

  const refreshLeaderboards = async () => {
    await getLeaderboards();
  };

  return { leaderboards, refreshLeaderboards };
}
