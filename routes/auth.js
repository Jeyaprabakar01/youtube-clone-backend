import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

//Create user
router.post("/signup", signup);

//Signin
router.post("/signin", signin);

//google auth
router.post("/google");

export default router;
