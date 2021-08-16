import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import cafe from "./cafe";
import board from "./board";
const rootReducer = combineReducers({
  user: user.reducer,
  cafe: cafe.reducer,
  board: board.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
