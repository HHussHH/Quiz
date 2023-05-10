import { db } from "../db";//Импорт обращения к БД
//Создали типы объектов
import { Request, Response } from "express";
type role = "user" | "vip" | "admin";
//Создали типы объектов
type user = {
  userId: number;
  username: string;
  mail: string;
  password: string;
  role: role;
  coins: number;
};
//Создаем метод для регистрации пользователя
export const registerUser = (req: Request, res: Response) => {
  const username = req.query.username;
  const email = req.query.email;
  const password = req.query.password;
  const q = `INSERT INTO users (username, mail, password, role, coins) 
  VALUES ('${username}','${email}','${password}','user','0')`;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
//Создаем метод для авторизации
export const getUser = (req: Request, res: Response) => {
  const username = req.query.username;
  const password = req.query.password;
  const q = `SELECT * FROM Users WHERE username = '${username}' AND password = ${password}  `;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
//Создаем метод для обновления кол-ва монет у пользователя
export const updateUserCoins = (req: Request, res: Response) => {
  const count = req.query.count;
  const id = req.query.id;
  const q = `UPDATE Users SET coins = ${count} WHERE (userId = ${id});`;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
//Создаем метод для обновления доп информации о пользвоателе
export const updateInfo = (req: Request, res: Response) => {
  const id = req.query.id;
  const q = `SELECT * FROM Users WHERE userId=${id}`;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
// http://localhost:5000/users/user/update?count=29&id=30
