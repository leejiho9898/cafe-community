import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    name:"",
}
const board = createSlice({
    name: 'boardReducer',
    initialState,
    reducers: {
      SetBoard: (state, action) => {
        const { name, _id } = action.payload;
        state.name = name;
        state._id = _id;
      },
    },
  });
  
  export const { SetBoard } = board.actions;
  
  export default board;