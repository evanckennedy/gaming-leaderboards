import { LeaderboardFormValues } from "../types/types";
import { createLeaderboardDAL } from "../DAL/leaderboardDAL";

export async function createLeaderboardBLL(data: LeaderboardFormValues) {
  return await createLeaderboardDAL(data);
}
