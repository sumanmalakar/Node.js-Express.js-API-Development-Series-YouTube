import http from 'http'

const server = http.createServer((req,res)=>{
    console.log("our server is stablished successfully")
    const date = new Date();
    console.log("Last time server hit ",date)
    res.end("Thank you for your request")
})


const port = 1000
server.listen(port,()=>console.log(`server is running on ${port}`))