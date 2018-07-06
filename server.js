var Request = require('request');
var MongoClient = require('mongodb').MongoClient();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();

var index = require ('./index');
var router = require('./router');



mongoose.connect('mongodb://localhost:27017/books');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8000;


app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);

router.use(function (req, res, next) {
  
    console.log('Logging of request will be done here');
    next(); 
});







