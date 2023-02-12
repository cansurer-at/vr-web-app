import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../pages/reducers/authSlice";

export const rootReducer = combineReducers({
  authReducer,
});
