import { Router } from "express";
import { getMotivation } from "../controllers/motivationController.js";

const router = Router();
router.get("/", getMotivation);
export default router;
