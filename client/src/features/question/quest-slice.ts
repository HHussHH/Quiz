import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoriec, limit, quest, Status } from "../../types";
import { RootState } from "../../store";
import axios from "axios";

type QuestSlice = {
  status: Status;
  error: string | null;
  list: quest[];
};

export const loadQuests = createAsyncThunk<
  quest[],
  {
    cat: categoriec;
    lim: limit;
  },
  { rejectValue: string }
>("@@quests/fetchQuests", async ({ cat, lim }, { rejectWithValue }) => {
  try {
    console.log(cat);
    console.log(lim);
    const response = await axios.get<quest[]>(
      `http://localhost:5000/quests/all?cat=${cat}&lim=${lim}`
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
    setNewTime: (state, action: PayloadAction<quest["id"]>) => {
      state.list.map((quest) => {
        if (quest.id === action.payload) {
          quest.currentTime = quest.currentTime - 1;
        }
      });
    },
    setNewFilters: (state, action: PayloadAction<categoriec>) => {
      state.list = state.list.filter(
        (el) =>
          el.category.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );
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
export const { setNewTime, setNewFilters } = questSlice.actions;
export const questReducer = questSlice.reducer;
export const selectQuest = (state: RootState) => state.quests;
