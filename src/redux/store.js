import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import profileReducers from "./profileReducers";
import reportReducer from "./reportReducer";
import doctorReducer from "./doctorReducer";

const store =  configureStore({
  reducer: {
    user: authReducer,
    profile: profileReducers,
    report: reportReducer,
    doctorList: doctorReducer,
  },
});

export default store;