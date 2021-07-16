import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/userRouter";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB 실행"))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log(`서버 실행 : http://localhost:${process.env.PORT}`);
};

app.use("/api/user", userRouter);

app.listen(process.env.PORT, handleListening);
