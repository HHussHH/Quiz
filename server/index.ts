import express from "express";
import questRouter from "./routes/quests";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/quests", questRouter);
app.listen(5000, () => {
  console.log("Connected!");
});
