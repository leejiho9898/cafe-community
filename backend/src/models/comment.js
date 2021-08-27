import mongoose, { Document, Model, Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
