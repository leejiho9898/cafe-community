import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  cafe: "",
};
const board = createSlice({
  name: "boardReducer",
  initialState,
  reducers: {
    SetBoard: (state, action) => {
      const { name, _id, cafe } = action.payload;
      state._id = _id;
      state.name = name;
      state.cafe = cafe;
    },
  },
});

export const { SetBoard } = board.actions;

export default board;
