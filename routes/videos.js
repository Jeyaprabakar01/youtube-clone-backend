import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//create video
router.post("/", verifyToken, addVideo);

//update video
router.put("/:id", verifyToken, updateVideo);

//delete video
router.delete("/:id", verifyToken, deleteVideo);

//get video
router.get("/find/:id", getVideo);

//update views
router.put("/view/:id", addView);

//get trend video
router.get("/trend", trend);

//get random video
router.get("/random", random);

//get subscribed channels
router.get("/sub", verifyToken, sub);

//get videos by tags
router.get("/tags", getByTag);

//get videos by title
router.get("/search", search);

export default router;
