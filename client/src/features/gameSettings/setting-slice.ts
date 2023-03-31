import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { count, difficulty, settings, theme } from "../../types";

const initialState: settings = {
  difficulty: "all",
  theme: "all",
  count: 5,
};

const gameSettingsSlice = createSlice({
  name: "@@modalWindow",
  initialState,
  reducers: {
    setDiff: (state, action: PayloadAction<difficulty>) => {
      state.difficulty = action.payload;
    },
    setTheme: (state, action: PayloadAction<theme>) => {
      state.theme = action.payload;
    },
    setCount: (state, action: PayloadAction<count>) => {
      state.count = action.payload;
    },
  },
});
export const { setDiff, setTheme, setCount } = gameSettingsSlice.actions;
export const gameSettingReducer = gameSettingsSlice.reducer;
export const selectSettings = (state: RootState) => state.gameSettings;
