import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import userRouter from "./routes/User.js";
import contactRouter from "./routes/Contact.js";

const app = express();
app.use(bodyParser.json());

// mongoDb setup
mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:G1s1IDtzrysnBeV4@cluster0.dplswg5.mongodb.net/",
    {
      dbName: "Contact_API_YouTube",
    }
  )
  .then(() => console.log("MongoDB Connected Successfully..!"))
  .catch((err) => console.log(err));

// user Router
app.use("/api/user", userRouter);

// contact Router
app.use("/api/contact", contactRouter);

const port = 3000;
app.listen(port, () => console.log(`Server is Running on Port ${port}`));
