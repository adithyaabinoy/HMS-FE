import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch";

const initialState = {
  loading: false,
  error: "",
  report: {},
  reportList:''
};

// get report actions
export const getReportList = createAsyncThunk(
  "reportList",
  async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      "https://hms-be-7svd.onrender.com/api/v1/test-report",
      requestOptions
    ).then((response) => response.json());
    return response;
  }
);



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
    [getReportList.pending]: (state) => {
      state.loading = true;
    },
    [getReportList.fulfilled]: (state, action) => {
      state.loading = false;
      state.reportList = action.payload;
    },
    [getReportList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default reportReducer.reducer;
