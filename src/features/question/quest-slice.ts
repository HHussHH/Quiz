import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quest } from "../../types";
import { RootState } from "../../store";

const initialState: quest[] = [
  {
    timeForQuest: 30,
    currentTime: 30,
    id: 10,
    title: "Тот самый вопрос",
    text: "string",
    category: "математика",
    difficutly: "easy",
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
    timeForQuest: 20,
    currentTime: 2,
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
  {
    timeForQuest: 42,
    currentTime: 42,
    id: 41,
    title: "Вопрос3",
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
  {
    timeForQuest: 10,
    currentTime: 10,
    id: 4231,
    title: "Вопрос4",
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
  reducers: {
    setNewTime: (state, action: PayloadAction<number>) => {
      state.map((quest) => {
        if (quest.id === action.payload) {
          quest.currentTime = quest.currentTime - 1;
        }
      });
    },
  },
});
export const { setNewTime } = questSlice.actions;
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
