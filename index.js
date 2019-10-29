//import express module from npm 
const express = require('express')
const app = express()
const Port = 5000
const path = require('path')
//app - app module 
// get - http method - get request 
// '/' , this is the path --- http://localhost:5000/
// callback function - request and response as arguments 
//res - response object
app.get('/', function(req,res){
    // res.send("hello express")
    res.json({"msg" : "hello json repsonse"})
})

app.get('/sriaknt', function(req,res){
    res.send("hello srikant")
})

app.get('/reddit', function(req,res){
    res.send("this the the reddit home page")
})

app.get('/reddit/r/apple', function(req,res){
    res.send("ths is the apple page in reddit")
})

app.get('/download', (req,res)=>{
    const file = path.join(__dirname,'modules.zip')
    console.log("file" , file)
    res.download(file)
})

//http server to listen at port 5000
app.listen(Port, ()=>console.log(`server is running at port ${Port}`))

