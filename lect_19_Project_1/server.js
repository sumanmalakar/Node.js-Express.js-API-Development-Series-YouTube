import express from 'express'
import mongoose from 'mongoose'
import { urlShort, getOriginalUrl } from "./Controllers/url.js";


const app = express();
const port = 3001;

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
    res.render("server.ejs",{shortUrl:null})
  })

  // handle url submission
  app.post("/shorten", urlShort);

  // redirect to original url using short url
  app.get("/:shortCode", getOriginalUrl);


app.listen(port,()=>console.log(`Server is running on port ${port}`))