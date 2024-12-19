import { Router } from "express";
import { signUp, signIn } from "../controllers/authController";

const router = Router();

router.post("/users/signup", signUp);
router.post("/users/signin", signIn);

export default router;
