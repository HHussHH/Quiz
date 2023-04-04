export type role = "user" | "vip" | "admin";

export type user = {
  userId: number;
  username: string;
  mail: string;
  password: string;
  role: role;
  coins: number;
};
