import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import cafe from "./cafe"
const rootReducer = combineReducers({ user: user.reducer, cafe: cafe.reducer });

const store = configureStore({ reducer: rootReducer });

export default store;
