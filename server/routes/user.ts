import express from "express";
import { getUser, registerUser } from "../controllers/user";

const router = express.Router();

router.get("/user", getUser);
router.get("/register", registerUser);

export default router;
