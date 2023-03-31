import express from "express";
import { getQuests } from "../controllers/quest";

const router = express.Router();

router.get("/all", getQuests);

export default router;
