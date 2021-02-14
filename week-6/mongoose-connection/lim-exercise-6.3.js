/*
============================================
; Title:  lim-exercise-6.3.js
; Author: Professor Krasso
; Modified by: Eunice Lim
; Date:  9 February 2021
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

var mongoose = require("mongoose");
var http = require("http");
var express = require("express");
var logger = require("morgan");

var mongoDB = "mongodb+srv://eulim:eulim@buwebdev-cluster-1.q7crj.mongodb.net/test"
mongoose.connect(mongoDB, {
    useMongoClient: true 
});

mongoose.Promise= global.Promise;

//mLab connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});

//application
var app = express();
app.use(logger("short"));

//create server
http.createServer(app).listen(3000, function(){
    console.log("Application connected to port 3000.");
});