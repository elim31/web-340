/*
============================================
; Title:  lim-exercise-4.2.js
; Author: Professor Krasso
; Modified by: Eunice Lim
; Date:   29 January 2021
; Description: JSON APIs - Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/

var express = require("express");

var http = require("http");

var app = express();

app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({
 
        firstName: "Hank",

        lastName: "Pyrenees",

        email: "hankbob8@yahoo.com", //Create your own get request and return a JSON object (pick your own values, but there must be at least three (3) fields)

        employeeId: id
        

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});