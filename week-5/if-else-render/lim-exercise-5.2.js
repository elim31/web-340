var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
app.set("views", path.resolve(__dirname,'views'));
app.set("view engine", "ejs");

var n = [
    "Aurora",
    "Blossom",
    "Catherine",
    "Duke"
];

app.get("/", function(request, response){
    response.render("index",{
        names:n
    });
});

http.createServer(app).listen(3000, function() {
    console.log("Application started on port 3000");
    
});