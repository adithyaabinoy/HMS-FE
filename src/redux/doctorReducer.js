import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  doctorList: "",
};


// export const fetchDoctor = createAsyncThunk("doctorsList", async () => {
//   const response = await fetch(
//     "https://hms-be-7svd.onrender.com/api/v1/doctorlist"
//   ).then((response) => response.json())
//   .then((data) => (data));
//   return response;
// });

export const fetchDoctorsList = createAsyncThunk("doctorsList", async () => {
  const response = await fetch(
    'https://hms-be-7svd.onrender.com/api/v1/doctorlist/'
  ).then((response) => response.json())
  .then((data) => (data));
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
  },
});

export default doctorReducer.reducer;
