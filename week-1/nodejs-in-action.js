/*
============================================
; Title: Exercise 1.5
; Author: Richard Krasso
; Date: 6 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 1.5 Hello World
;===========================================
*/ 

const http = require("http");

function processRequest(req, res) {

const body = "Hello World, it's 2021!";

const contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);