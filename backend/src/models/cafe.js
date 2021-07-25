import mongoose, { Schema } from "mongoose";

const CafeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 30,
      minlength: 2,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    route: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 20,
      minlength: 4,
    },
    members: [
      {
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Cafe = mongoose.model("Cafe", CafeSchema);
export default Cafe;
