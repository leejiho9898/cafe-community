import express from "express";
import * as userCtrl from "../controlers/userControler";
const router = express.Router();

router.post("/register", userCtrl.register);
router.post("/login",userCtrl.login)
router.post("/logout",userCtrl.logout)
export default router;