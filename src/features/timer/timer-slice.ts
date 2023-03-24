import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type timerInitial = {
  [key: string]: number;
};
const initialState: timerInitial = {
  maxTime: 30,
  currentTime: 30,
};

const timerSlice = createSlice({
  name: "@@timer",
  initialState,
  reducers: {
    setTime(state, action: PayloadAction<number>) {
      state.currentTime -= action.payload;
    },
  },
});
export const { setTime } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
export const selectTime = (state: RootState) => state.timer;
