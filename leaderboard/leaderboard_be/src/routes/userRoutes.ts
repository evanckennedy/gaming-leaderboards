import { Router } from "express";
import { deleteUser, getUsers } from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);

export default router;
