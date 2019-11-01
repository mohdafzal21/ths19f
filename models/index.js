//all the files related to the db 
const mongoose = require('mongoose')

//connect express application with mongodb
mongoose.connect('mongodb://localhost/fpf');

//import the products collection
module.exports.PRODUCTS = require('./products');

//import the users collection 
module.exports.USERS = require('./users');