import { db } from "../db"; //Импорт обращения к БД
//Создали типы объектов
export type difficult = "easy" | "normal" | "hard" | "all";
export type categoriec = "фильмы" | "программирование" | "математика" | "все";
import { Request, Response } from "express";
//Создание шаблона получаемых данных
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
//Создаем метод для получения вопросов из бд по опр критериям (3шт)
export const getQuests = (req: Request, res: Response) => {
  const cat = req.query.cat === "все" ? "category" : `'${req.query.cat}'`;
  const lim = req.query.lim;
  const diff =
    req.query.diff === "all" ? "'easy','normal','hard'" : `'${req.query.diff}'`;
//Отсылаем sql запрос с нашими критериями
  const q = `SELECT * FROM quests WHERE category IN (${cat}) AND difficulty IN (${diff}) ORDER BY RAND() LIMIT ${lim} `;
  db.query(q, (_, data: quest[]) => {
    return res.json(data);
  });
};
