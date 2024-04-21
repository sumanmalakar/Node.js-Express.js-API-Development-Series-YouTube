import express from 'express'
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  "mongodb+srv://sumanmalakar2022:G1s1IDtzrysnBeV4@cluster0.dplswg5.mongodb.net/",{
    "dbName":"NodeJS Express API Series"
  }
).then(()=>console.log("Mongodb Connected")).catch((error)=>console.log(error));


const Port = 3000;

app.listen(Port,()=>console.log(`Server is running on port ${Port}`))