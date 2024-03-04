import express from 'express'

const app = express()

const products = [
  { title: "iphone", price: 1999999 },
  { title: "oneplus", price: 12000 },
  { title: "sony", price: 182000 },
];

app.get('/',(req,res)=>{
    const product = {
      title: "sony",
      price: 182000,
    };
    res.render('index.ejs',{product})
    // console.log("serving ejs file")
})

app.listen(1000,()=>console.log("Server is running on port 1000"))