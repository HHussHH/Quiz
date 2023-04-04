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

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const q = `SELECT * FROM Users WHERE useId = ${id} `;

  db.query(q, (_, data: user[]) => {
    return res.json(data);
  });
};
