/*
============================================
; Title: Exercise 3.2 Logging
; Author: Richard Krasso
; Date: 21 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 3.2 Logging
;===========================================
*/
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); //Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response){
    response.render("index",{
        message:"Welcome to Eunice's Morgan Logger Example!"  //Modify the message by supplying your own custom message
    });
});

http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080");
});

