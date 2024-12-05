import { Router } from "express";
import {
  createLeaderboard,
  getLeaderboards,
} from "../controllers/leaderboardController";

const router = Router();

router.post("/leaderboards", createLeaderboard);
router.get("/leaderboards", getLeaderboards);

export default router;
