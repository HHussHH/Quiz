import { db } from "../db";
export type difficult = "easy" | "normal" | "hard" | "all";
export type categoriec =
  | "фильмы"
  | "сериалы"
  | "история"
  | "математика"
  | "все";
import { Request, Response } from "express";

type quest = {
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficulty: difficult;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  currentAnswer: string;
  timeForQuest: number;
  currentTime: number;
};

export const getQuests = (req: Request, res: Response) => {
  const cat =
    req.query.cat === "все"
      ? "'математика','фильмы','сериалы','история'"
      : `'${req.query.cat}'`;
  const lim = req.query.lim;
  const diff =
    req.query.diff === "all" ? "'easy','normal','hard'" : `'${req.query.diff}'`;

  const q = `SELECT * FROM questions WHERE category IN (${cat}) AND difficulty IN (${diff})  LIMIT ${lim} `;
  db.query(q, (_, data: quest[]) => {
    return res.json(data);
  });
};
