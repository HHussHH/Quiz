import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoriec, difficulty, limit, quest, Status } from "../../types";
import { RootState } from "../../store";
import axios from "axios";

type QuestSlice = {
  status: Status;
  error: string | null;
  list: quest[];
  currentQuest: quest["id"];
};

export const loadQuests = createAsyncThunk<
  quest[],
  {
    cat: categoriec;
    lim: limit;
    diff: difficulty;
  },
  { rejectValue: string }
>("@@quests/fetchQuests", async ({ cat, diff, lim }, { rejectWithValue }) => {
  try {
    const response = await axios.get<quest[]>(
      `http://localhost:5000/quests/all?cat=${cat}&lim=${lim}&diff=${diff}`
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
  currentQuest: 0,
};

const questSlice = createSlice({
  name: "@@quest",
  initialState,
  reducers: {
    setNewTime: (state, action: PayloadAction<quest["id"]>) => {
      // eslint-disable-next-line
      state.list.map((quest) => {
        if (quest.id === action.payload) {
          quest.currentTime = quest.currentTime - 1;
        }
      });
    },
    setNewCurrentQuest: (state, action: PayloadAction<quest["id"]>) => {
      state.currentQuest = action.payload;
    },
    setClearList: (state, action: PayloadAction<quest[]>) => {
      state.list = action.payload;
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
        state.currentQuest = action.payload[0].id;
      });
  },
});
export const { setNewTime, setNewCurrentQuest, setClearList } =
  questSlice.actions;
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
