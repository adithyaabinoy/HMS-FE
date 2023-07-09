import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2 } from "../helpers/fetch";
const initialState = {
  token: "",
  loading: false,
  error: "",
  role: '',
};

export const signupUser = createAsyncThunk("signupuser", async (body) => {
  const result = await fetch2(
    "https://hms-be-7svd.onrender.com/api/v1/signup",
    body
  );
  return result;
});

export const signInUser = createAsyncThunk("signInUser", async (body) => {
  const result = await fetch2(
    "https://hms-be-7svd.onrender.com/api/v1/login",
    body
  );
  return result;
});

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addRole: (state, action) => {
      state.role = localStorage.getItem("role");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload: { error, message } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.error = message;
      }
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, { payload: { error, token, role } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.role = role;
        state.token = token;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
      }
    },
  },
});

export const { addToken, logout, addRole } = authReducer.actions;
export default authReducer.reducer;
