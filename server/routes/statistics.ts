import express from "express";
import { getStatistics, setStatistics } from "../controllers/statistics";

const router = express.Router();

router.get("/updateStat", setStatistics);
router.get("/getStat", getStatistics);

export default router;
