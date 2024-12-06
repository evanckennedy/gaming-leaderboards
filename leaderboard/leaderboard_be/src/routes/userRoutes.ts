import { Router } from "express";
import {
  deleteUser,
  getUsers,
  resetPassword,
} from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/reset-password", resetPassword);

export default router;
