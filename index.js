import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//DB connection
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB!");
    })
    .catch((err) => {
      throw err;
    });
};

//create server
app.listen(8000, () => {
  connect();
  console.log("Connected Server!");
});
