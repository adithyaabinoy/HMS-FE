import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  profile: {},
};

//get profile actions
export const getProfile = createAsyncThunk("getProfile", async () => {
  const response = await fetch(
    "https://hms-be-7svd.onrender.com/api/v1/profile",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const result = response.json();
  return result;
});

//update profile actions

export const updateProfile = createAsyncThunk("updateProfile", async (body) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    "https://hms-be-7svd.onrender.com/api/v1/updateprofile",
    requestOptions
  );
  const result = response.json();
  return result;
});

const profileReducer = createSlice({
  name: "profile",
  initialState,
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateProfile.pending]: (state) => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [updateProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default profileReducer.reducer;
