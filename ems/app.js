var express = require("express");

var mongoose=require("mongoose");
var Schema = mongoose.Schema;
var http = require("http");
var path = require("path");
var helmet = require("helmet")
var logger = require("morgan");
var Employee = require("./models/employee");
var app = express();
var csurf = require("csurf");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var csurfProtection = csurf({cookie: true});

//MongoDB connection
var mongoDB = "mongodb+srv://eulim:eulim@buwebdev-cluster-1.q7crj.mongodb.net/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csurfProtection);
app.use(function(request, response, next) {
    var token = request.csurfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csurfToken = token;
    next();
});

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

// get the request's form data
var EmployeeName = request.body.txtName;

console.log(employeeName);

// create an Employee model
var employee = new Employee({
    name: employeeName
});

// save
employee.save(function (error) {
    if (error) throw error;
    console.log(employeeName + " saved successfully!");
});

response.redirect("/");

app.post("/process", function(request, response) {
    // console.log(request.body.txtName); 
    if (!request.body.txtName) { 
        response.status(400).send("Entries must have a name");
         return;
     }
});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});