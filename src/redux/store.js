import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import profileReducers from "./profileReducers";

const store =  configureStore({
  reducer: {
    user: authReducer,
    profile: profileReducers,
  },
});

export default store;