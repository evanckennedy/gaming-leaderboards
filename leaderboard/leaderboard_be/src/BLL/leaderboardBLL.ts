import { LeaderboardFormValues } from "../types/types";
import {
  createLeaderboardDAL,
  getLeaderboardsDAL,
  deleteLeaderboardDAL,
} from "../DAL/leaderboardDAL";

/**
 * Handles the business logic for creating a leaderboard.
 */
export async function createLeaderboardBLL(data: LeaderboardFormValues) {
  return await createLeaderboardDAL(data);
}

/**
 * Handles the business logic for fetching leaderboards.
 */
export async function getLeaderboardsBLL() {
  return await getLeaderboardsDAL();
}

/**
 * Handles the business logic for deleting a leaderboard.
 */
export async function deleteLeaderboardBLL(sessionId: number) {
  return await deleteLeaderboardDAL(sessionId);
}
