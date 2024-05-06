import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected to database");
});

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
app.get("/test", async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "Hello!" });
});

app.listen(7000, () => {
  console.log("server started on locahost:7000");
});
