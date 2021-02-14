var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.use(express.static(__dirname + '/public'));

app.get("/", function (request, response) {
    response.render("index", {
        message  : "Easy Employee Management System"
    });
});

app.get("/view", function (request, response) {
    response.render("view", {
        message  : "View your selected employee here"
    });
});

app.get("/list", function (request, response) {
    response.render("list", {
        message  : "View of employee records"
    });
});



app.get("/new", function (request, response) {
    response.render("new", {
        message  : "Enter new employee information here"
    });
});
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});