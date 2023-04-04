export type difficulty = "all" | "easy" | "normal" | "hard";
export type categoriec =
  | "все"
  | "фильмы"
  | "программирование"
  | "история"
  | "математика";

type current = "answer_1" | "answer_2" | "answer_3";

export type quest = {
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficulty: difficulty;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  currentAnswer: current;
  timeForQuest: number;
  currentTime: number;
};
