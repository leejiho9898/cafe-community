import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  _id: "",
  name: "",
  route: "",
  manager: [
    {
      _id: "",
      name: "",
      password: "",
    },
  ],
  members: [],
};

const cafe = createSlice({
  name: "cafeReducer",
  initialState,
  reducers: {
    setCafe: (state, action) => action.payload,
  },
});


export const { SetCafe } = cafe.actions;

export default cafe;
