export type difficulty = "all" | "easy" | "normal" | "hard";
export type theme = "all" | "math" | "program" | "cinema";
export type count = 5 | 10 | 20;

export interface settings {
  difficulty: difficulty;
  theme: theme;
  count: count;
}
