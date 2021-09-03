import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  title: "",
  content: "",
  board: "",
  writer:"",
};

const post = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    SetPost: (state, action) => {
      const { title, content, board, _id ,writer} = action.payload;
      state._id = _id;
      state.title = title;
      state.board = board;
      state.content = content;
      state.writer = writer;
    },

    PostStateEmpty: () => initialState,
  },
});

export const { SetPost, PostStateEmpty } = post.actions;

export default post;
