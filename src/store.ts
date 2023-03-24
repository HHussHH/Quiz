import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { questReducer } from "./features/question/quest-slice";

export const store = configureStore({
  reducer: {
    quests: questReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
