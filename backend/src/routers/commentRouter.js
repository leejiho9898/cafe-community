import express from "express";
import * as commentCtrl from "../controllers/commentContriller";

const router = express.Router();

router.post("/createComment", commentCtrl.createComment);
router.get("/readComments/:postId", commentCtrl.readComments);
router.patch("/updateComment", commentCtrl.updateComments);
router.delete("/deleteComment/:postId/:commentId", commentCtrl.deleteComment);
export default router;
