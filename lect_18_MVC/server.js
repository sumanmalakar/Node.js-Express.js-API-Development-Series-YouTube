import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./Controllers/user.js";

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:G1s1IDtzrysnBeV4@cluster0.dplswg5.mongodb.net/",
    {
      dbName: "NodeJS_Express_API_Series",
    }
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((error) => console.log(error));

  app.get('/',(req,res)=>{
    res.render('index.ejs')
  })

app.post('/',userRegister)


const Port = 3000;

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
