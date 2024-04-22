import express from "express";
import mongoose from "mongoose";
import path from "path";
import multer from "multer";
const app = express();

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djedan94x",
  api_key: "888297255138387",
  api_secret: "p8z34EqFFhoteSiUe9zPpqfcfWw",
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

const storage = multer.diskStorage({
  // destination: './public/uploads',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

const fileSchema = new mongoose.Schema({
    filename:String,
    public_id:String,
    imgUrl:String
})

const File  = mongoose.model("Cloudinary",fileSchema)

app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

app.post("/upload", upload.single("file"), async (req, res) => {
  //  console.log("This is my file ",req.file)
  const file = req.file.path;

  const cloudinaryResponse = await cloudinary.uploader.upload(file, {
    folder: "NodeJs_Express_API_Series",
  });

  const savetoDb = await File.create({
    filename: file.originalname,
    public_id: cloudinaryResponse.public_id,
    imgUrl: cloudinaryResponse.secure_url,
  });

  res.render("index.ejs", { url: cloudinaryResponse.secure_url });
  console.log("cloudinary response ", cloudinaryResponse,savetoDb);
});

app.listen(1000, () => console.log("Server is running on port 1000"));
