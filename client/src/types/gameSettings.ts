import { categoriec, difficulty } from "./question";

export type limit = 5 | 10 | 20;

export interface settings {
  difficulty: difficulty;
  category: categoriec;
  count: limit;
}
