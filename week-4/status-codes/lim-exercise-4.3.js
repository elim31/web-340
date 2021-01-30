/*
============================================
; Title:  lim-exercise-4.3.js
; Author: Professor Krasso
; Modified by: Eunice Lim
; Date:   29 January 2021
; Description: HTTPS Status Codes - Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(request, response){
    response.status(404);
    response.json({
        error:"Not here. Look somewhere else!"
    })
});

app.get("/ok", function(request,response){
    response.status(200);
    response.json({
        message:"You got it!"
    })
});

app.get("/not-implemented", function(request,response){
    response.status(501);

    response.json({
        error: "Unable to implement page!"
    })
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});