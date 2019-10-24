var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var dotenv = require("dotenv");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3001;

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
// var databaseUri = "mongodb://localhost/movieScrapper";

// var MONGODB_URI = process.env.MONGODB_URI

// if (MONGODB_URI) {
//     //execute heroku
//     mongoose.connect(MONGODB_URI), {
//         useNewUrlParser: true
//         }
//     }
//     else{
//     mongoose.connect(databaseUri);
//     } 
mongoose.connect("mongodb+srv://Jamie:MongoDB5122@octobercluster-e1wqm.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

//Routes
//=================
var routes = require("./controllers/routes.js");
app.use(routes);

// Start the server
app.listen(process.env.PORT || PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;
