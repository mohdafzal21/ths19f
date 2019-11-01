const express = require('express')
const router = express.Router()
const db = require('../models')
//GET 
//path - '/products'
//find in the products collection and get all the products 
router.get('/' ,(req,res)=>{
   db.PRODUCTS.find()
   .then((productsData)=> res.render('products.ejs' , {productsData:productsData}))
   .catch((err)=> res.send(err))
})

//POST
//path -'/products/'
//insert the collection data into the db 
// mongoose method - create 'which is going to insert the data into mongodb'
router.post('/',(req,res)=>{
    console.log("the data from client", req.body)
    db.PRODUCTS.create(req.body)
    .then(()=> res.redirect('/products'))
    .catch((err)=> res.send(err))
})





module.exports = router;













// const productsData = [
//     {
//         name : "mumble",
//         image : "https://ph-files.imgix.net/ec85df1b-f868-47ad-af7a-3fc28cd83ec6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
//         description: "hello mumble",
//         votes : 10
//     },
//     {
//         name : "video effects",
//         image : "https://ph-files.imgix.net/b1458271-1046-47b1-95fd-461c7881eb90?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
//         description: "video",
//         votes: 20
//     },
//     {
//         name : "hot jar",
//         image : "https://ph-files.imgix.net/ba4546e7-904b-4c45-bda6-93489a4b4e78?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
//         description: "video",
//         votes: 30
//     },
//     {
//         name : "mumble",
//         image : "https://ph-files.imgix.net/ec85df1b-f868-47ad-af7a-3fc28cd83ec6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
//         description: "hello mumble",
//         votes : 10
//     },
//     {
//         name : "video effects",
//         image : "https://ph-files.imgix.net/b1458271-1046-47b1-95fd-461c7881eb90?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
//         description: "video",
//         votes: 20
//     },
//     {
//         name : "hot jar",
//         image : "https://ph-files.imgix.net/ba4546e7-904b-4c45-bda6-93489a4b4e78?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
//         description: "video",
//         votes: 30
//     }
// ]
