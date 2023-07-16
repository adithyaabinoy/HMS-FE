import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch4 } from "../helpers/fetch";

const patientId = localStorage.getItem("patientId");
const initialState = {
  loading: false,
  error: "",
  appointmentList: "",
  doctorName: {},
  addAppointment: "",
  patientAppointmentHistory: "",
  doctorAppointmentHistory: ''
};

// doctors appointment history
export const doctorAppointments = createAsyncThunk(
  "doctorAppointments",
  async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `https://hms-be-7svd.onrender.com/api/v1/appointments/doctor/${patientId}`,
      requestOptions
    ).then((response) => response.json());
    return response;
  }
);


// patients appointment
export const patientAppointments = createAsyncThunk(
  "patientAppointments",
  async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `https://hms-be-7svd.onrender.com/api/v1/appointment/patient/${patientId}`,
      requestOptions
    ).then((response) => response.json());
    return response;
  }
);
// Adding appointment

export const createAppointments = createAsyncThunk(
  "addAppointment",
  async (body) => {
    const result = await fetch4(
      "https://hms-be-7svd.onrender.com/api/v1/bookapp",
      body
    );
    return result;
  }
);

// fetch doctors name actions

export const getDoctorNames = createAsyncThunk("doctorName", async () => {
  const response = await fetch(
    "https://hms-be-7svd.onrender.com/api/v1/doctor/"
  )
    .then((response) => response.json())
    .then((data) => data);
  return response;
});

// fetching appointments actions
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
    [getDoctorNames.pending]: (state) => {
      state.loading = true;
    },
    [getDoctorNames.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctorName = action.payload;
    },
    [getDoctorNames.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createAppointments.pending]: (state) => {
      state.loading = true;
    },
    [createAppointments.fulfilled]: (state, action) => {
      state.loading = false;
      state.addAppointment = action.payload;
    },
    [createAppointments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [patientAppointments.pending]: (state) => {
      state.loading = true;
    },
    [patientAppointments.fulfilled]: (state, action) => {
      state.loading = false;
      state.patientAppointmentHistory = action.payload;
    },
    [patientAppointments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [doctorAppointments.pending]: (state) => {
      state.loading = true;
    },
    [doctorAppointments.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctorAppointmentHistory = action.payload;
    },
    [doctorAppointments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default appointmentReducer.reducer;
