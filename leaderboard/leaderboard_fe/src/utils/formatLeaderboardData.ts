import { Leaderboard } from "@/types/types";
import { formatDate } from "./formatDate";

/**
 * Formats leaderboard data
 *
 * Takes raw leaderboard data and formats it to include the game name,
 * formatted game date, and player details (full name, placement, and score).
 * This is all the relevant data for the UI display of leaderboards
 */
export function formatLeaderboardData(leaderboards: Leaderboard[]) {
  return leaderboards.map((leaderboard) => {
    // Convert the raw string to a Date object
    const rawDate = new Date(leaderboard.gameDate);

    return {
      id: leaderboard.id,
      gameName: leaderboard.game.name,
      // Store the raw date for sorting
      rawGameDate: rawDate,
      // Use formatDate to produce a display-friendly version
      displayGameDate: formatDate(rawDate),
      players: leaderboard.sessionPlayers.map((sessionPlayer) => ({
        fullName: `${sessionPlayer.player.firstName} ${sessionPlayer.player.lastName}`,
        placement: sessionPlayer.placement,
        score: sessionPlayer.score,
      })),
    };
  });
}
