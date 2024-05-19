import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import userRouter from "./routes/User.js";
import contactRouter from "./routes/Contact.js";
import { config } from "dotenv";
import cors from 'cors'

const app = express();
app.use(bodyParser.json());


// .env steup
config({ path: ".env" });

// cors
app.use(cors({
  origin:true,
  methods:["POST","GET","DELETE","PUT"],
  credentials:true
}))

// mongoDb setup
mongoose
  .connect(process.env.MongoUrl, {
    dbName: "Contact_API_YouTube",
  })
  .then(() => console.log("MongoDB Connected Successfully..!"))
  .catch((err) => console.log(err));

// user Router
app.use("/api/user", userRouter);

// contact Router
app.use("/api/contact", contactRouter);

const port = 3000;
app.listen(port, () => console.log(`Server is Running on Port ${port}`));
