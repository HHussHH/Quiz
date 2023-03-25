export type difficult = "easy" | "normal" | "hard";
export type categoriec = "фильмы" | "сериалы" | "история" | "математика";

type Answers = [
  { [key: string]: string },
  { [key: string]: string },
  { [key: string]: string }
];

type current = string;

export type quest = {
  timeForQuest: number;
  currentTime: number;
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficutly: difficult;
  answers: Answers;
  currentAnswer: current;
};
