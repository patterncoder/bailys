//bring in express
var express = require('express');
//set environment variables
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//kick of express
var app = express();
//get the config based on environment
var config = require('./server/config/config')[env];
// set up express based on env config
require("./server/config/express")(app, config);
// set up parent routes
require('./server/config/routes')(app);
// set up error messages
require('./server/config/errors')(app);




module.exports = app;
