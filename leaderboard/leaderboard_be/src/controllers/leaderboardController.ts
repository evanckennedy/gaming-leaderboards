import { LeaderboardFormValues } from "../types/types";
import { Request, Response } from "express";
import {
  createLeaderboardBLL,
  getLeaderboardsBLL,
  deleteLeaderboardBLL,
} from "../BLL/leaderboardBLL";

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

/**
 * Handles fetching of leaderboards.
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns the leaderboard data.
 */
export async function getLeaderboards(req: Request, res: Response) {
  try {
    const leaderboards = await getLeaderboardsBLL();
    res.status(200).json(leaderboards);
  } catch (error) {
    console.error("Error fetching leaderboards", error as Error);
    res.status(500).json({ error: (error as Error).message });
  }
}

/**
 * Handles the deletion of a leaderboard (session) by session ID
 *
 * If an error occurs during the process, it returns a 500 status code with the error message.
 * Otherwise, it returns the deleted session and a success response.
 */
export async function deleteLeaderboard(req: Request, res: Response) {
  try {
    const sessionId = parseInt(req.params.id, 10);

    const deletedSession = await deleteLeaderboardBLL(sessionId);
    res.status(200).json({
      message: "Leaderboard deleted successfully",
      deletedSession,
    });
  } catch (error) {
    console.error("Error delelting leaderboard", error as Error);
    res.status(500).json({ error: (error as Error).message });
  }
}
