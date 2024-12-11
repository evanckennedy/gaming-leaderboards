import { Router } from "express";
import {
  createLeaderboard,
  getLeaderboards,
} from "../controllers/leaderboardController";
import { verifyToken } from "../middleware/authMiddleware";
import { checkRole } from "../middleware/roleMiddleware";

const router = Router();

// Apply middleware only to the POST route
router.post(
  "/leaderboards",
  verifyToken,
  checkRole(["Root", "Create"]),
  createLeaderboard,
);
router.get("/leaderboards", getLeaderboards);

export default router;
