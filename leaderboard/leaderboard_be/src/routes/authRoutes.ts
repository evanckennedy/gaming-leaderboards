import { Router } from "express";
import { signUp } from "../controllers/authController";

const router = Router();

router.post("/users/signup", signUp);

export default router;
