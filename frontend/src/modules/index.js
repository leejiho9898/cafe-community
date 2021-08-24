import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import cafe from "./cafe";
import board from "./board";
import post from "./post";
const rootReducer = combineReducers({
  user: user.reducer,
  cafe: cafe.reducer,
  board: board.reducer,
  post: post.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
