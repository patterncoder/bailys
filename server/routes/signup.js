var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var fs = require('fs');
var router = express.Router();
var util = require('../utils/util.js')


router.post('/', function (req, res) {
    //console.log("post to /api/signup " + req.body);
    var filePath = rootPath + 'list.txt';
    if (!util.search(filePath, req.body.email))
    {
        fs.appendFile(filePath, req.body.email + '\r\n', function (err) {
                if (err) return console.log(err);
                console.log('Added email address to list.txt');
        });
        res.send({ success: true });
    }
    else
    {
        res.send({ success: false })
    }
});

module.exports = router;