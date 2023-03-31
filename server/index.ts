import express from "express";
import questRouter from "./routes/quests";
const app = express();

app.use(express.json());

app.use("/quests", questRouter);
app.listen(5000, () => {
  console.log("Connected!");
});
