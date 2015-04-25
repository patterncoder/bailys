var express = require('express');
var fs = require('fs');
var router = express.Router();


router.post('/', function (req, res) {
    console.log("post to /api/signup " + req.body);
    fs.appendFile('helloworld.txt', req.body.email + ';', function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
    res.send("hello");
    

});

module.exports = router;