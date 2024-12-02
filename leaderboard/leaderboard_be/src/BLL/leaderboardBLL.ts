import { LeaderboardFormValues } from "../types/types";
import { createLeaderboardDAL } from "../DAL/leaderboardDAL";

/**
 * Handles the business logic for creating a leaderboard.
 *
 * @param data - The data for creating the leaderboard, including game name, genre name, and player information.
 * @returns A promise that resolves with the created leaderboard data, including game, genre, and session information.
 */
export async function createLeaderboardBLL(data: LeaderboardFormValues) {
  return await createLeaderboardDAL(data);
}
