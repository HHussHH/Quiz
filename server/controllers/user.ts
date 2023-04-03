import { db } from "../db";
import { Request, Response } from "express";
type role = "user" | "vip" | "admin";

type user = {
  useId: number;
  username: string;
  mail: string;
  password: string;
  role: role;
  coins: number;
};

export const getUser = (_: Request, res: Response) => {
  const q = `SELECT * FROM Users WHERE useId='1 ' `;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
