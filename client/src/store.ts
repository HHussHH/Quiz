import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { questReducer } from "./features/question/quest-slice";

import { answerReducer } from "./features/selectAnswer/answer-slice";
import { finishReducer } from "./features/endGame/finishSlice";
import { modalWindowReducer } from "./features/modalWindow/modalWindow-slice";
import { gameSettingReducer } from "./features/gameSettings/setting-slice";
import axios from "axios";
import * as api from "./config";
export const store = configureStore({
  reducer: {
    quests: questReducer,
    currentAnswer: answerReducer,
    finish: finishReducer,
    modalWindow: modalWindowReducer,
    gameSettings: gameSettingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
