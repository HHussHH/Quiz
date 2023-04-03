export type role = "user" | "vip" | "admin";

export type user = {
  useId: number;
  username: string;
  mail: string;
  password: string;
  role: role;
  coins: number;
};
