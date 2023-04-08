import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status, user } from "../../types";
import axios from "axios";
import { RootState } from "../../store";

type UserSlice = {
  status: Status;
  error: string | null;
  list: user;
};

export const loadUser = createAsyncThunk<
  user[],
  {
    login: string;
    password: string;
  },
  { rejectValue: string }
>("@@user/fethUser", async ({ login, password }, { rejectWithValue }) => {
  try {
    const response = await axios.get<user[]>(
      `http://localhost:5000/users/user?username=${login}&password=${password}`
    );
    return response.data;
  } catch (err) {
    return rejectWithValue("Failed to fetch");
  }
});

export const registerUser = createAsyncThunk<
  user[],
  {
    login: string;
    email: string;
    password: string;
  },
  { rejectValue: string }
>(
  "@@user/registerUser",
  async ({ login, email, password }, { rejectWithValue }) => {
    try {
      await axios.get<user[]>(
        `http://localhost:5000/users/register?username=${login}&email=${email}&password=${password}`
      );
      const responseData = await axios.get<user[]>(
        `http://localhost:5000/users/user?username=${login}&password=${password}`
      );
      return responseData.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch");
    }
  }
);
const initialState: UserSlice = {
  status: "idle",
  error: null,
  list: {
    userId: 0,
    username: "Гость",
    mail: "",
    password: "",
    role: "user",
    coins: 0,
  },
};

const userSlice = createSlice({
  name: "@@user/",
  initialState,
  reducers: {
    ExitIntoAccount: (state, action: PayloadAction<user>) => {
      state.list = action.payload;
    },
  },
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
      console.log(action.payload);
      state.list = action.payload[0];
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = "received";
      state.error = null;
      console.log(action.payload);
      state.list = action.payload[0];
    });
  },
});

export const userReducer = userSlice.reducer;
export const { ExitIntoAccount } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
