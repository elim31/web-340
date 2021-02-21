/*
============================================
; Title:  lim-exercise-7.2.js
; Author: Professor Krasso
; Modified by: Eunice Lim
; Date:  19 February 2021
; Description: TDD in Action
;===========================================
*/

var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});
