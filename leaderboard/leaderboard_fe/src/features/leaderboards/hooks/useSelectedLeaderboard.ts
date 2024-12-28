import { useState } from "react";
import { FormattedLeaderboardData } from "../helpers/leaderboardSorting";

function useSelectedLeaderboard() {
  const [selectedLeaderboard, setSelectedLeaderboard] =
    useState<FormattedLeaderboardData | null>();

  const selectLeaderboard = (leaderboard: FormattedLeaderboardData) => {
    setSelectedLeaderboard(leaderboard);
  };

  const clearSelectedLeaderboard = () => {
    setSelectedLeaderboard(null);
  };

  return { selectedLeaderboard, selectLeaderboard, clearSelectedLeaderboard };
}

export default useSelectedLeaderboard;
