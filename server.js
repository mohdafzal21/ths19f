//import express module from npm 
const express = require('express')
const app = express()
const Port = 5000
const path = require('path')
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs' )
// const friends = ["tom", "plant" , "smacky","jerry"]


//
const indexController = require('./routes/index')
const userController = require('./routes/userController')
const productsController = require('./routes/productsController')
app.use('/', indexController)
app.use('/users', userController)
app.use('/products', productsController)


//http server to listen at port 5000
app.listen(Port, ()=>console.log(`server is running at port ${Port}`))


//routes 
//

// app.get('/products', (req,res)=>{
//     res.render('products.ejs')
// })

// app.get('/login' , (req,res)=>{
//     res.render('login.ejs')
// })

// //localhost:3000/form
// app.post('/form',(req,res)=>{
//     console.log(req.body.friends)
//     friends.push(req.body.friends)
//     res.redirect('/')
// })

// app.post('/delete/:id' , (req,res)=> {
//     console.log(req.params)


//     friends.map((friend,index)=> {
//         if(friend ===req.params.id){
//           return  friends.splice(index,1)
//         }
//     })
//    res.redirect('/')
// })