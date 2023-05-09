//Подключение зависимостей(фреймворков, методов и тп) для опр адреса
import express from "express";
import {
  getStatistics,
  getTopCompletedQuests,
  getTopPlayed,
  setStatistics,
} from "../controllers/statistics";

const router = express.Router();
//Выдача данных c с сервера статистике
router.get("/updateStat", setStatistics); //
router.get("/getStat", getStatistics);
router.get("/getStat/topCompleted", getTopCompletedQuests);
router.get("/getStat/topPlayed", getTopPlayed);

export default router;
