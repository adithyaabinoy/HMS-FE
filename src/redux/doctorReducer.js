import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch3 } from "../helpers/fetch";

const initialState = {
  loading: false,
  error: "",
  doctorList: "",
  addDoctor: '',
};

// adding doctor actions
export const addingDoctor = createAsyncThunk("addDoctor", async (body) => {
  const result = await fetch3(
    "https://hms-be-7svd.onrender.com/api/v1/adddoctor",
    body
  );
  return result;
});

// Doctor list actions
export const fetchDoctorsList = createAsyncThunk("doctorsList", async () => {
  const response = await fetch(
    "https://hms-be-7svd.onrender.com/api/v1/doctorlist/"
  )
    .then((response) => response.json())
    .then((data) => data);
  return response;
});

const doctorReducer = createSlice({
  name: "doctorList",
  initialState,
  extraReducers: {
    [fetchDoctorsList.pending]: (state) => {
      state.loading = true;
    },
    [fetchDoctorsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctorList = action.payload;
    },
    [fetchDoctorsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addingDoctor.pending]: (state) => {
      state.loading = true;
    },
    [addingDoctor.fulfilled]: (state, action) => {
      state.loading = false;
      state.addDoctor = action.payload;
    },
    [addingDoctor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default doctorReducer.reducer;
