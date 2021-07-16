import express from "express";
import * as userCtrl from "../controlers/userControler";
const router = express.Router();

router.post("/register", userCtrl.register);
export default router;