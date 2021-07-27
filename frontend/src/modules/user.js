import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  id: "",
};

const user = createSlice({
  //  createSlice는 액션 생성함수, 리듀서를 둘다 만들어줌
  name: "userReducer",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      const { _id, name, id } = action.payload;
      state._id = _id;
      state.name = name;
      state.id = id;
    },
    UserStateEmpty: () => initialState,
  },
});

export const { SetUser, UserStateEmpty } = user.actions;

export default user;
