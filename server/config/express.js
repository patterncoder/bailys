var express = require('express'),
    stylus = require('stylus');

var stylus = require('stylus');

var favicon = require('serve-favicon');
var logger = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var path = require('path');

module.exports = function (app, config) {

    // view engine setup
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    // Stylus setup
    //console.log(config.rootPath);
    //console.log(__dirname);
    function compile(str, path) {
        return stylus(str).set('filename', path);

    }
    app.use(stylus.middleware(
                {
                    src: config.rootPath + '/public',
                    compile: compile
                }
            ));


    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(config.rootPath + '/public', { maxAge: 86400000 }));

};
