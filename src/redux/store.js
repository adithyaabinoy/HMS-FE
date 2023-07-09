import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import profileReducers from "./profileReducers";
import reportReducer from "./reportReducer";

const store =  configureStore({
  reducer: {
    user: authReducer,
    profile: profileReducers,
    report: reportReducer,
  },
});

export default store;