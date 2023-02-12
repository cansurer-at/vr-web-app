import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../pages/reducers/authSlice";
import { userReducer } from "../pages/reducers/userSlice";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
});
