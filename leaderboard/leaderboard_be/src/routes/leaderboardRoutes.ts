import { Router } from "express";
import {
  createLeaderboard,
  deleteLeaderboard,
  getLeaderboards,
} from "../controllers/leaderboardController";
import { verifyToken } from "../middleware/authMiddleware";
import { checkRole } from "../middleware/roleMiddleware";

const router = Router();

// POST route for creating a leaderboard
router.post(
  "/leaderboards",
  verifyToken,
  checkRole(["Root", "Create"]),
  createLeaderboard,
);

// GET route for fetching leaderboards
router.get("/leaderboards", getLeaderboards);

// DELETE route for deleting a leaderboard by sessionId
router.get(
  "/leaderboards/:id",
  verifyToken,
  checkRole(["Root"]),
  deleteLeaderboard,
);

export default router;
