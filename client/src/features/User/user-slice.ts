import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, user } from "../../types";
import axios from "axios";
import { RootState } from "../../store";
type UserSlice = {
  status: Status;
  error: string | null;
  list: user[];
};

export const loadUser = createAsyncThunk<user[], void, { rejectValue: string }>(
  "@@user/fethUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<user[]>(
        "http://localhost:5000/users/user"
      );
      return response.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch");
    }
  }
);
const initialState: UserSlice = {
  status: "idle",
  error: null,
  list: [],
};

const userSlice = createSlice({
  name: "@@user/",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || "we dont have this data";
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.status = "received";
      state.error = null;
      state.list = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
