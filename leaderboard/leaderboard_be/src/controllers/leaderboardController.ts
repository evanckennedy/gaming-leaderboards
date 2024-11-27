import { LeaderboardFormValues } from "../types/types";
import { Request, Response } from "express";
import { createLeaderboardBLL } from "../BLL/leaderboardBLL";

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
