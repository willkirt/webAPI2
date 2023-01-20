var express = require("express");
var app = express();
//var path = require("path");
var port = process.env.port || 3000;

// Setup a route for static files
app.use(express.static(__dirname+"/static"));

// Main route for the site
app.get('/', function (req, res) {
    res.sendFile(__dirname+"/static/index.html");
});

app.listen(port, function(){
    console.log("Running on Localhost:3000.");
});