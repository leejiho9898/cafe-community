import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const saltRountds = 10;
const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = async function (password) {
  const result = await bcrypt.hash(password, saltRountds);
  this.password = result;
};

const User = mongoose.model("User", UserSchema);
export default User;
