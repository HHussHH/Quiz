//Подключение зависимостей(фреймворков, методов и тп) для опр адреса
import express from "express";
import { getQuests } from "../controllers/quest";

const router = express.Router();
//Выдача данных c с сервера квестам 
router.get("/all", getQuests);

export default router;
