import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

//Create user
router.post("/signup", signup);

//Signin
router.post("/signin");

//google auth
router.post("/google");

export default router;
