import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type initState = {
  selectAnswer: string;
  countCurrentAnswer: number;
};
const initialState: initState = {
  selectAnswer: "",
  countCurrentAnswer: 0,
};

const answerSlice = createSlice({
  name: "@@answer",
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<string>) {
      state.selectAnswer = action.payload;
    },
    setCurrentAnswer(state) {
      state.countCurrentAnswer += 1;
    },
  },
});
export const { setAnswer, setCurrentAnswer } = answerSlice.actions;
export const answerReducer = answerSlice.reducer;
export const selectAnswer = (state: RootState) =>
  state.currentAnswer.selectAnswer;
export const selectCountAnswer = (state: RootState) =>
  state.currentAnswer.countCurrentAnswer;
