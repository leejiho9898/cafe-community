import express from "express";
import * as boardCtrl from "../controllers/boardController";

const router = express.Router();

router.post("/create", boardCtrl.create); // 게시판 생성

export default router;