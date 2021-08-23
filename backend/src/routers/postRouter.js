import express from "express";
import * as postCtrl from "../controllers/postController";
const router = express.Router();

router.post("/createPost/:cafeId", postCtrl.createPost);
router.get("/readPostList/:cafeId/:boardId",postCtrl.readPostList);
router.get("/readPostDetail/:postId",postCtrl.readPostDetail);
router.patch("/updatePost",postCtrl.updatePost);
router.delete("/deletePost/:postId",postCtrl.deletePost);
export default router;