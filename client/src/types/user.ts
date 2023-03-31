export type role = "user" | "vip" | "admin";

export type quest = {
  useId: number;
  username: string;
  mail: string;
  role: role;
  coins: number;
};
