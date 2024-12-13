import { Router } from "express";
import { signUp, signIn } from "../controllers/authController";

const router = Router();

router.post("/users/signup", signUp);
router.post("/users/signin", signIn);

// Could be used in the future if you make it more secure
// router.patch("/users/password", resetPassword);

export default router;
