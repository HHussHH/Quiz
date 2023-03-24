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
  },
  {
    id: 1,
    title: "string",
    text: "string",
    category: "фильмы",
    difficutly: "hard",
  },
];

const questSlice = createSlice({
  name: "@@quest",
  initialState,
  reducers: {},
});
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
