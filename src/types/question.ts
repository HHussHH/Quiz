export type difficult = "easy" | "normal" | "hard";
export type categoriec = "фильмы" | "сериалы" | "история" | "математика";

export type quest = {
  id: number;
  title: string;
  text: string;
  category: categoriec;
  difficutly: difficult;
};
