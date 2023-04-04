import express from "express";
import {
  getQuests,
  getQuestsWithDiffEasy,
  getQuestsWithDiffHard,
  getQuestsWithDiffNormal,
} from "../controllers/quest";

const router = express.Router();

router.get("/all", getQuests);
router.get("/easy", getQuestsWithDiffEasy);
router.get("/normal", getQuestsWithDiffNormal);
router.get("/hard", getQuestsWithDiffHard);

export default router;
