import { db } from "../db";
export type difficult = "easy" | "normal" | "hard";
export type categoriec = "фильмы" | "сериалы" | "история" | "математика";
import { Request, Response } from "express";

type quest = {
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficutly: difficult;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  currentAnswer: string;
  timeForQuest: number;
  currentTime: number;
};

export const getQuests = (req: Request, res: Response) => {
  const cat = req.query.cat;
  const { lim } = req.params;
  console.log(lim);
  const q = `SELECT * FROM questions WHERE category = '${cat}' `;

  db.query(q, (_, data: quest[]) => {
    return res.json(data);
  });
};

export const getQuestsWithDiffEasy = (_: Request, res: Response) => {
  const q = `SELECT * FROM questions WHERE difficutly = 'easy'`;

  db.query(q, (_, data: quest[]) => {
    return res.json(data);
  });
};

export const getQuestsWithDiffNormal = (_: Request, res: Response) => {
  const q = `SELECT * FROM questions WHERE difficutly = 'normal'`;

  db.query(q, (_, data: quest[]) => {
    return res.json(data);
  });
};

export const getQuestsWithDiffHard = (_: Request, res: Response) => {
  const q = `SELECT * FROM questions WHERE difficutly = 'hard'`;

  db.query(q, (_, data: quest[]) => {
    return res.json(data);
  });
};
