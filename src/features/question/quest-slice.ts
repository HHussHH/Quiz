import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quest } from "../../types";
import { RootState } from "../../store";

const initialState: quest[] = [
  {
    id: 0,
    title: "string",
    text: "string",
    category: "математика",
    difficutly: "easy",
    answers: {
      answer_1: "text1",
      answer_2: "text2",
      answer_3: "text3",
    },
    currentAnswer: "answer_1",
  },
  {
    id: 1,
    title: "string",
    text: "string",
    category: "фильмы",
    difficutly: "hard",
    answers: {
      answer_1: "text1",
      answer_2: "text2",
      answer_3: "text3",
    },
    currentAnswer: "answer_1",
  },
];

const questSlice = createSlice({
  name: "@@quest",
  initialState,
  reducers: {},
});
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
