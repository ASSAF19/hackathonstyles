
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userapi = require('./apis/userApi')

const SERVER_PORT = 3333;


mongoose.connect('mongodb://localhost/userDB', function() {
 console.log("DB connection established!!!");
})



var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(userapi)












app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});
