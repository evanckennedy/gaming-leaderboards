import { Router } from "express";
import { getRoles } from "../controllers/roleController";
import { verifyToken } from "../middleware/authMiddleware";
import { checkRole } from "../middleware/roleMiddleware";

const router = Router();

// The route below requires authentication and root role
router.use(verifyToken);
router.use(checkRole(["Root"]));

router.get("/roles", getRoles);

export default router;
