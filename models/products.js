//creating a collection products 
const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name : {
        type : String
    },
    image : {
        type : String
    },
    description : {
        type : String
    },
    votes : {
        type: Number
    }
 
});

const PRODUCTS = mongoose.model('PRODUCTS' , productsSchema)

 module.exports = PRODUCTS;

 