var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var MongoClient = require('mongodb').MongoClient();
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    dbo.collection("books").find({}, { location: 1 }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();

      
    });
  });