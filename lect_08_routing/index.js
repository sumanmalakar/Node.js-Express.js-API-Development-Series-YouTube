import http from 'http'

const server = http.createServer((req,res)=>{
    // console.log("server is hit by someone")
    // console.log(req.url)
    // res.end("bahar se hi bhag jao")
    if(req.url === '/superman'){
        res.end("Your are belong form DC")
    }else if(req.url === '/spiderman'){
        res.end("your are belong from marvel")
    }

})

const port = 2000
server.listen(port,()=>console.log(`server is running on port ${port}`))