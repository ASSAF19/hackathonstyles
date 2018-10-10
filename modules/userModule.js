var mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    password: Number,
    playlist:[String]
})

let User = mongoose.model('user' , userSchema)

module.exports= User;