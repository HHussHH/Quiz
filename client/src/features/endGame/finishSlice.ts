import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type initState = {
  isFinish: boolean;
};
const initialState: initState = {
  isFinish: false,
};

const finishSlice = createSlice({
  name: "@@answer",
  initialState,
  reducers: {
    setFinish(state, action: PayloadAction<boolean>) {
      state.isFinish = action.payload;
    },
  },
});
export const { setFinish } = finishSlice.actions;
export const finishReducer = finishSlice.reducer;
export const selectFinish = (state: RootState) => state.finish;
