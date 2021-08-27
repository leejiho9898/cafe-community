import express from "express";
import * as boardCtrl from "../controllers/boardController";

const router = express.Router();

router.post("/createBoard/:cafeId", boardCtrl.create); // 게시판 생성
router.get("/readBoardList/:cafeId", boardCtrl.readBoardList); //게시판리스트 읽기
router.get("/readBoard/:boardId", boardCtrl.readBoard); //게시판 읽기
router.patch("/modifyBoard/:cafeId", boardCtrl.modifyBoard); //게시판 수정
router.delete("/deleteBoard/:cafeId/:boardId", boardCtrl.deleteBoard); // 게시판 삭제
export default router;
