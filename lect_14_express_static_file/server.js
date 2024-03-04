import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    const product = {
      title: "sony",
      price: 182000,
    };
    res.render('index.ejs',{product})
    // console.log("serving ejs file")
})

app.listen(1000,()=>console.log("Server is running on port 1000"))