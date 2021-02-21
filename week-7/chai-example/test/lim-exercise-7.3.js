/*
============================================
; Title:  lim-exercise-7.3.js
; Author: Professor Krasso
; Modified by: Eunice Lim
; Date:  19 February 2021
; Description: TDD in Action
;===========================================
*/

var fruits = require("../lim-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f= fruits('Apple, Orange, Mango');
        assert(Array.isArray(f));
    });
});