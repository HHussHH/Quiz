import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Extra, quest } from "../../types";
import { RootState } from "../../store";
import axios from "axios";
type Status = "loading" | "rejected" | "received" | "idle";
type QuestSlice = {
  status: Status;
  error: string | null;
  list: quest[];
};

export const loadQuests = createAsyncThunk<
  quest[],
  void,
  { rejectValue: string }
>("@@quests/fetchQuests", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<quest[]>(
      "http://localhost:5000/quests/all"
    );
    return response.data;
  } catch (err) {
    return rejectWithValue("Failed to fetch quests");
  }
});

const initialState: QuestSlice = {
  status: "idle",
  error: null,
  list: [],
};

const questSlice = createSlice({
  name: "@@quest",
  initialState,
  reducers: {
    setNewTime: (state, action) => {
      state.list.map((quest) => {
        if (quest.id === action.payload) {
          quest.currentTime = quest.currentTime - 1;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuests.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadQuests.rejected, (state, action) => {
        state.status = "rejected";

        state.error = action.payload || "We don have data :(";
      })
      .addCase(loadQuests.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload;
      });
  },
});
export const { setNewTime } = questSlice.actions;
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
