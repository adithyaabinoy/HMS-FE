import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch";

const initialState = {
  loading: false,
  error: "",
  report: {},
};

// post report actions

export const postReport = createAsyncThunk("postReport", async (body) => {
  const result = await fetch3(
    "https://hms-be-7svd.onrender.com/api/v1/test-report",
    body
  );
  return result;
});

const reportReducer = createSlice({
  name: "report",
  initialState,
  extraReducers: {
    [postReport.pending]: (state) => {
      state.loading = true;
    },
    [postReport.fulfilled]: (state, action) => {
      state.loading = false;
      state.report = action.payload;
    },
    [postReport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default reportReducer.reducer;
