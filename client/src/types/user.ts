export type role = "user" | "vip" | "admin";

export type user = {
  useId: number;
  username: string;
  password: string;
  mail: string;
  role: role;
  coins: number;
};
