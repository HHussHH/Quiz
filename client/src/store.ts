import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { questReducer } from "./features/question/quest-slice";
import { answerReducer } from "./features/selectAnswer/answer-slice";
import { finishReducer } from "./features/endGame/finishSlice";
import { modalWindowReducer } from "./features/modalWindow/modalWindow-slice";
import { gameSettingReducer } from "./features/gameSettings/setting-slice";
import { userReducer } from "./features/User/user-slice";
import { statisticsReducer } from "./features/statistics/statistics-slice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  quests: questReducer,
  currentAnswer: answerReducer,
  finish: finishReducer,
  modalWindow: modalWindowReducer,
  gameSettings: gameSettingReducer,
  user: userReducer,
  statistics: statisticsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
