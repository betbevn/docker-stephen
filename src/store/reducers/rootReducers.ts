import { combineReducers } from "@reduxjs/toolkit";
import usersReducers from "./usersReducers";

export const rootReducers = combineReducers({
  users: usersReducers,
});
