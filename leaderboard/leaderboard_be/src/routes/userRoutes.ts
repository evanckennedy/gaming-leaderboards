import { Router } from "express";
import {
  deleteUser,
  getUsers,
  resetPassword,
  updateUserRole,
} from "../controllers/userController";
import { verifyToken } from "../middleware/authMiddleware";
import { checkRole } from "../middleware/roleMiddleware";

const router = Router();

// All routes below require authentication and root role
router.use(verifyToken);
router.use(checkRole(["Root"]));

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/password", resetPassword);
router.patch("/users/:id/role", updateUserRole);

export default router;
