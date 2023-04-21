import express from "express";
import {
  getUser,
  registerUser,
  updateInfo,
  updateUserCoins,
} from "../controllers/user";

const router = express.Router();

router.get("/user", getUser);
router.get("/user/update", updateUserCoins);
router.get("/user/updateInfo", updateInfo);

router.get("/register", registerUser);

export default router;
