import express from 'express'

const app = express()


// C = Create => POST (method)
// R = Read   => GET  (method)
// U = Update => PUT  (method)
// D = Delete => DELETE (method)

app.get('/',(req,res)=>{
    console.log("This is home route")
    res.send("This is your response")
})

app.get('/products',(req,res)=>{
    res.json({
      products: [
        { title: "iphone", price: 1999999 },
        { title: "oneplus", price: 12000 },
      ],
    });
})


const port = 3000;

app.listen(port,()=>console.log(`server is running on ${port}`))