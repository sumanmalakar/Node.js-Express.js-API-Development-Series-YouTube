import express from 'express'

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/superman',(req,res)=>{
    // console.log("working")
    console.log(req.body)
    res.json({topic:'form handling successfull'})
})

app.listen(1000,()=>console.log("server is running on port 1000"))