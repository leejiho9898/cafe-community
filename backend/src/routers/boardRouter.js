import express from "express";
import * as boardCtrl from "../controllers/boardController";

const router = express.Router();

router.post("/create", boardCtrl.create); // 게시판 생성
router.get("/readBoardList/:cafeId", boardCtrl.readBoardList); //게시판 불러오기
router.delete("/delete/:cafeId/:boardId", boardCtrl.deleteBoard); // 게시판 삭제
export default router;
