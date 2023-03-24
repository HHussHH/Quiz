import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: string = "";

const answerSlice = createSlice({
  name: "@@answer",
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});
export const { setAnswer } = answerSlice.actions;
export const answerReducer = answerSlice.reducer;
export const selectAnswer = (state: RootState) => state.currentAnswer;
