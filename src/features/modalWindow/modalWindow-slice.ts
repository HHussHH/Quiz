import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type initialType = [
  {
    [key: string]: boolean;
  }
];
const initialState: initialType = [
  {
    startWindow: false,
  },
];

const questSlice = createSlice({
  name: "@@modalWindow",
  initialState,
  reducers: {},
});

export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
