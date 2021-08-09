import mongoose, { Schema } from "mongoose";

const BoardSchema = new Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cafe",
      },
    },
    { timestamps: true }
  );
  
  const Board = mongoose.model("Board", BoardSchema);
  export default Board;