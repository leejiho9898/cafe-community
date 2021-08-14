import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    SetCafe: (state, action) => action.payload
    // { 이거 대체로 이거가능
    //   const { _id, name, route, manager, members } = action.payload;
    //   state._id = _id;
    //   state.name = name;
    //   state.route = route;
    //   state.manager = manager;
    //   state.members = members;
    // },
  },
});

export const { SetCafe } = cafe.actions;

export default cafe;
