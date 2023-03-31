import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type initialType = {
  [key: string]: boolean;
};
const initialState: initialType = {
  startWindow: false,
};

const setModalSlice = createSlice({
  name: "@@modalWindow",
  initialState,
  reducers: {
    setStartStatus: (state, action: PayloadAction<boolean>) => {
      state.startWindow = action.payload;
    },
  },
});
export const { setStartStatus } = setModalSlice.actions;
export const modalWindowReducer = setModalSlice.reducer;
export const selectModal = (state: RootState) => state.modalWindow;
