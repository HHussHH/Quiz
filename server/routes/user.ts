//Подключение зависимостей(фреймворков, методов и тп) для опр адреса
import express from "express";
import {
  getUser,
  registerUser,
  updateInfo,
  updateUserCoins,
} from "../controllers/user";

const router = express.Router();
//Выдача данных c с сервера пользователю 
router.get("/user", getUser); //вход
router.get("/user/update", updateUserCoins); //Начисление монеток
router.get("/user/updateInfo", updateInfo); //Обновление данных

router.get("/register", registerUser); //регистрация

export default router;
