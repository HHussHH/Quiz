export type difficult = "easy" | "normal" | "hard";
export type categoriec = "фильмы" | "сериалы" | "история" | "математика";

type Answers = {
  [key: string]: string;
};

type current = string;

export type quest = {
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficutly: difficult;
  answers: Answers;
  currentAnswer: current;
};
