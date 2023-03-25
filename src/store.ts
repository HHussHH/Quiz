import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { questReducer } from "./features/question/quest-slice";

import { answerReducer } from "./features/selectAnswer/answer-slice";
import { finishReducer } from "./features/endGame/finishSlice";

export const store = configureStore({
  reducer: {
    quests: questReducer,
    currentAnswer: answerReducer,
    finish: finishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
