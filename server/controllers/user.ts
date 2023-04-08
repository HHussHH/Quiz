import { db } from "../db";
import { Request, Response } from "express";
type role = "user" | "vip" | "admin";

type user = {
  userId: number;
  username: string;
  mail: string;
  password: string;
  role: role;
  coins: number;
};
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

export const getUser = (req: Request, res: Response) => {
  const username = req.query.username;
  const password = req.query.password;
  const q = `SELECT * FROM Users WHERE username = '${username}' AND password = ${password}  `;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
