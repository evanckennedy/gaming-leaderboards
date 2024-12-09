import { Router } from "express";
import {
  deleteUser,
  getUsers,
  resetPassword,
  updateUserRole,
} from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/password", resetPassword);
router.patch("/users/:id/role", updateUserRole);

export default router;
