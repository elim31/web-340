/*
============================================
; Title: Exercise 1.3
; Author: Richard Krasso
; Date: 6 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 1.3 Modules
;===========================================
*/ 

const url = require("url");

const parsedURL = url.parse("https://github.com/elim31/web-340?name=lim");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

