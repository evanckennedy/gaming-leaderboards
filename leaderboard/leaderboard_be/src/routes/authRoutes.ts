import { Router } from "express";
import { signUp, signIn, resetPassword } from "../controllers/authController";

const router = Router();

router.post("/users/signup", signUp);
router.post("/users/signin", signIn);
router.patch("/users/password", resetPassword);

export default router;
