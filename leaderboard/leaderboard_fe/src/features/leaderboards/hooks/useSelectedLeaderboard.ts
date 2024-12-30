import { useState } from "react";
import { FormattedLeaderboardData } from "../helpers/leaderboardSorting";
import { deleteLeaderboard } from "@/services/leaderboardService";

function useSelectedLeaderboard(refreshLeaderboards?: () => Promise<void>) {
  const [selectedLeaderboard, setSelectedLeaderboard] =
    useState<FormattedLeaderboardData | null>(null);

  const selectLeaderboard = (leaderboard: FormattedLeaderboardData) => {
    setSelectedLeaderboard(leaderboard);
  };

  const clearSelectedLeaderboard = () => {
    setSelectedLeaderboard(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedLeaderboard !== null && selectedLeaderboard.id !== undefined) {
      try {
        await deleteLeaderboard(selectedLeaderboard.id);
        clearSelectedLeaderboard();
        // Re-fetch the updated list so UI reflects the deletion
        if (refreshLeaderboards) {
          await refreshLeaderboards();
        }
      } catch (error) {
        console.error("Error deleting leaderboard:", error);
      }
    }
  };

  return {
    selectedLeaderboard,
    selectLeaderboard,
    clearSelectedLeaderboard,
    handleConfirmDelete,
  };
}

export default useSelectedLeaderboard;
