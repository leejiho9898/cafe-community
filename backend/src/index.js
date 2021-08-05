import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/userRouter";
import cafeRouter from "./routers/cafeRouter";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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
app.use("/api/cafe", cafeRouter);
app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, handleListening);
