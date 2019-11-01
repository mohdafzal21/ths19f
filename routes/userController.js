const express = require('express')
const router = express.Router()
const db = require('../models/')


//Path - /users
router.get('/',(req,res)=>{
    res.send("users page")
})

//GET - /users/login
//Path - /login
//render - login.ejs
router.get('/login',(req,res)=>{
    res.render('login.ejs')
})

//GET - 
//path - /users/signup
//render - signup.ejs
router.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})

//POST = 
//path -  /users/signup
//add new user to the db - create 
router.post('/signup', (req,res)=>{
    console.log("req", req.body)
   db.USERS.create(req.body)
   .then((data)=> res.json(data))
   .catch((err)=> res.send(err))
});



module.exports = router;