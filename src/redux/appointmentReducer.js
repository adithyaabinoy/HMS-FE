import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  appointmentList: "",
};

export const fetchAppointmentList = createAsyncThunk(
  "appointmentList",
  async () => {
    const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
    const response = await fetch(
      "https://hms-be-7svd.onrender.com/api/v1/allappointments/",
      requestOptions
    ).then((response) => response.json());
    return response;
  }
);

const appointmentReducer = createSlice({
  name: "appointmentList",
  initialState,
  extraReducers: {
    [fetchAppointmentList.pending]: (state) => {
      state.loading = true;
    },
    [fetchAppointmentList.fulfilled]: (state, action) => {
      state.loading = false;
      state.appointmentList = action.payload;
    },
    [fetchAppointmentList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default appointmentReducer.reducer;
