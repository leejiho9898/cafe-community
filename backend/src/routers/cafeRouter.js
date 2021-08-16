import express from "express";
import * as cafeCtrl from "../controllers/cafeController";
const router = express.Router();

router.post("/create", cafeCtrl.create);
router.post("/uploadImg", cafeCtrl.uploadImg);
router.get("/readAllCafeList", cafeCtrl.readAllCafeList);
router.get("/cafeInfo/:route/:userId", cafeCtrl.cafeInfo);
export default router;
