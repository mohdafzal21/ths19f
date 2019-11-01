const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    username : String,
    email : String
})

const USERS = mongoose.model('USERS', userSchema )

module.exports = USERS