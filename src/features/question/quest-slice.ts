import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quest } from "../../types";
import { RootState } from "../../store";

const initialState: quest[] = [
  {
    id: 0,
    title: "Вопрос1",
    text: "string",
    category: "математика",
    difficutly: "hard",
    answers: [
      {
        id: "answer_1",
        text: "text1",
      },
      {
        id: "answer_2",
        text: "text2",
      },
      {
        id: "answer_3",
        text: "text3",
      },
    ],
    currentAnswer: "answer_1",
  },
  {
    id: 1,
    title: "Вопрос2",
    text: "string",
    category: "фильмы",
    difficutly: "hard",
    answers: [
      {
        id: "answer_1",
        text: "text1",
      },
      {
        id: "answer_2",
        text: "text2",
      },
      {
        id: "answer_3",
        text: "text3",
      },
    ],
    currentAnswer: "answer_2",
  },
];

const questSlice = createSlice({
  name: "@@quest",
  initialState,
  reducers: {},
});
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
