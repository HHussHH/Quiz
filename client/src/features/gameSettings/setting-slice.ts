import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { limit, difficulty, settings, categoriec } from "../../types";

const initialState: settings = {
  difficulty: "all",
  category: "все",
  limit: "10",
};

const gameSettingsSlice = createSlice({
  name: "@@modalWindow",
  initialState,
  reducers: {
    setDiff: (state, action: PayloadAction<difficulty>) => {
      state.difficulty = action.payload;
    },
    setCat: (state, action: PayloadAction<categoriec>) => {
      state.category = action.payload;
    },
    setCount: (state, action: PayloadAction<limit>) => {
      state.limit = action.payload;
    },
  },
});
export const { setDiff, setCat, setCount } = gameSettingsSlice.actions;
export const gameSettingReducer = gameSettingsSlice.reducer;
export const selectSettings = (state: RootState) => state.gameSettings;
