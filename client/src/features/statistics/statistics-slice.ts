import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status, user } from "../../types";
import { RootState } from "../../store";
import axios from "axios";

type statisticsSlice = {
  status: Status;
  error: string | null;
  list: stats;
};

type stats = {
  userId: number;
  statId: number;
  completedQuests: number;
  matchesPlayed: number;
};

export const updateStat = createAsyncThunk<
  void,
  {
    id: user["userId"];
    completed: number;
    matches: number;
  },
  { rejectValue: string }
>(
  "@@statistics/fetchStatUpdate",
  async ({ id, completed, matches }, { rejectWithValue }) => {
    try {
      await axios.get<void>(
        `http://localhost:5000/statistics/updateStat?userId=${id}&completed=${completed}&matches=${matches}`
      );
    } catch (err) {
      return rejectWithValue("Failed to fetch quests");
    }
  }
);

export const getStat = createAsyncThunk<
  stats[],
  {
    id: user["userId"];
  },
  { rejectValue: string }
>("@@statistics/fetchStatGet", async ({ id }, { rejectWithValue }) => {
  try {
    if (id != 0) {
      const respone = await axios.get<stats[]>(
        `http://localhost:5000/statistics/getStat?userId=${id}`
      );
      return respone.data;
    } else {
      return [
        {
          userId: 0,
          statId: 0,
          completedQuests: 0,
          matchesPlayed: 0,
        },
      ];
    }
  } catch (err) {
    return rejectWithValue("Failed to fetch quests");
  }
});

const initialState: statisticsSlice = {
  status: "idle",
  error: null,
  list: { userId: 0, statId: 0, completedQuests: 0, matchesPlayed: 0 },
};

const statisticsSlice = createSlice({
  name: "@@statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateStat.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateStat.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || "We don have data :(";
      })
      .addCase(getStat.fulfilled, (state, action) => {
        state.status = "received";
        console.log(action.payload);
        const { userId, statId, completedQuests, matchesPlayed } =
          action.payload[0];
        state.list = {
          userId: userId,
          statId: statId,
          completedQuests: completedQuests,
          matchesPlayed: matchesPlayed,
        };
        state.error = null;
      });
  },
});
export const statisticsReducer = statisticsSlice.reducer;
export const selectStatistics = (state: RootState) => state.statistics;
