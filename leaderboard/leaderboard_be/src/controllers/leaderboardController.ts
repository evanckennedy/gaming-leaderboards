import { LeaderboardFormValues } from "../types/types";
import { Request, Response } from "express";
import { createLeaderboardBLL } from "../BLL/leaderboardBLL";

/**
 * Handles the creation of a leaderboard
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns the created game, genre, and session data
 */
export async function createLeaderboard(req: Request, res: Response) {
  try {
    const data: LeaderboardFormValues = req.body;
    const result = await createLeaderboardBLL(data);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating leaderboard", (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
}
