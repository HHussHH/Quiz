import { db } from "../db";//Импорт обращения к БД

import { Request, Response } from "express";
//Создаем метод для обновления данных по id пользователя
export const setStatistics = (req: Request, res: Response) => {
  const userId = req.query.userId;
  const completedQuests = req.query.completed;
  const matchesPlayed = req.query.matches;
  const q = `UPDATE statistics SET completedQuests = ${completedQuests}, matchesPlayed = ${matchesPlayed} WHERE userId = ${userId}`;

  db.query(q, (_, data) => {
    return res.json(data);
  });
};
//Создание метода для получения данных пользователя
export const getStatistics = (req: Request, res: Response) => {
  const userId = req.query.userId;
  const q = `SELECT * FROM statistics WHERE userId = ${userId}`;

  db.query(q, (_, data) => {
    return res.json(data);
  });
};
//Создание метода для получения статистики (топ 5 игроков по выполненным вопросам)
export const getTopCompletedQuests = (req: Request, res: Response) => {
  const q = `
    SELECT u.username, s.completedQuests
    FROM quiz.users u
    JOIN quiz.statistics s ON u.userId = s.userId
    ORDER BY s.completedQuests DESC LIMIT 5`;
  db.query(q, (_, data) => {
    return res.json(data);
  });
};
//Создание метода для получения статистики (топ 5 игроков по количеству игр)
export const getTopPlayed = (req: Request, res: Response) => {
  const q = `
    SELECT u.username, s.matchesPlayed
    FROM quiz.users u
    JOIN quiz.statistics s ON u.userId = s.userId
    ORDER BY s.matchesPlayed DESC LIMIT 5`;
  db.query(q, (_, data) => {
    return res.json(data);
  });
};

// Пример - http://localhost:5000/statistics/updateStat?userId=20&completed=2&matches=2
