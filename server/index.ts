//Подключение зависимостей.
import express from "express";
import questRouter from "./routes/quests";
import userRouter from "./routes/user";
import statisticsRouter from "./routes/statistics";
import cors from "cors";
//создаем сервер
const app = express();
app.use(cors());
app.use(express.json());

//выдаем данные по запросам на опр.адрес
app.use("/quests", questRouter);
app.use("/users", userRouter);
app.use("/statistics", statisticsRouter);

//запускаем сервер на порту 5000
app.listen(5000, () => {
  console.log("Connected!");
});
