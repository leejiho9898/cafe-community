import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
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

UserSchema.methods.serialize = function(){
  const data = this.toJSON();
  delete data.password;
  return data
}

// 입력받은 비밀번호가 디비에 암호화된 비밀번호와 같은지 비교
UserSchema.methods.checkPassword = async function(password){
  const result = await bcrypt.compare(password, this.password);
  return result; //같으면 1 다르면 0 출력
}

// 토큰 발급하기 함수
UserSchema.methods.generateToken = async function(){
  const token = jwt.sign({
    _id : this._id,
    name : this.name,
    id:this.id,
  },
  process.env.JWT_SECRET
  );
  this.token = token;

  await this.save();
  return token;
}


const User = mongoose.model("User", UserSchema);
export default User;
