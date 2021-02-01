/*
============================================
; Title: Assignment 2.4
; Author: Richard Krasso
; Date: 15 Jan 2021
; Modified By: Eunice Lim
; Description: Assignment 2.4 EJS Views
;===========================================
*/ 
var http = require("http");

var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tells Express the views are in the 'views' directory

app.set("view engine", "ejs"); //Tells Express to use the EJS view engine

app.get("/", function(request, response){
    response.render("index",{
       // message: "Welcome to the homepage!" //Remove the message field

    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});

