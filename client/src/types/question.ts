export type difficult = "easy" | "normal" | "hard";
export type categoriec = "фильмы" | "сериалы" | "история" | "математика";

type Answers = [
  { [key: string]: string },
  { [key: string]: string },
  { [key: string]: string }
];

type current = "answer_1" | "answer_2" | "answer_3";

export type quest = {
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficutly: difficult;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  currentAnswer: current;
  timeForQuest: number;
  currentTime: number;
};
