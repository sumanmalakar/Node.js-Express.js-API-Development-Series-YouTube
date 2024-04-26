import express from "express";
import mongoose from "mongoose";
import path from "path";
import multer from "multer";
import { User } from "./Models/User.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djedan94x",
  api_key: "888297255138387",
  api_secret: "p8z34EqFFhoteSiUe9zPpqfcfWw",
});

const app = express();

app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// show register page
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// create user
app.post("/register", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  const { name, email, password } = req.body;

  try {
    const cloudinaryRes = await cloudinary.uploader.upload(file, {
      folder: "NodeJs_Authentication_App",
    });

    let user = await User.create({
      profileImg: cloudinaryRes.secure_url,
      name,
      email,
      password,
    });

    res.redirect("/");

    console.log(cloudinaryRes, name, email, password);
  } catch (error) {
    res.send("Error Accure");
  }
});

// login User
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log("getting user ", user);
    if (!user) res.render("login.ejs", { msg: "User not found" });
    else if (user.password != password) {
      res.render("login.ejs", { msg: "Invalid password" });
    } else {
      res.render("profile.ejs", { user });
    }
  } catch (error) {
    res.send("Error Accure");
  }
});

// all users
app.get("/users", async (req, res) => {
  let users = await User.find().sort({createdAt:-1});
  res.render("users.ejs",{users})
});

// show login page
app.get("/", (req, res) => {
  res.render("login.ejs");
});

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:G1s1IDtzrysnBeV4@cluster0.dplswg5.mongodb.net/",
    {
      dbName: "NodeJS_Express_API_Series",
    }
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((error) => console.log(error));

const port = 1000;
app.listen(port, () => console.log(`Server is running or port ${port}`));
