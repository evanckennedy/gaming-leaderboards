import { Router } from "express";
import { createLeaderboard } from "../controllers/leaderboardController";

const router = Router();

router.post("/leaderboards", createLeaderboard);

export default router;
