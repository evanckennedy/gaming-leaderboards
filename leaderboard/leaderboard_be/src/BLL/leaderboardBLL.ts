import { LeaderboardFormValues } from "../types/types";
import {
  createLeaderboardDAL,
  getLeaderboardsDAL,
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
