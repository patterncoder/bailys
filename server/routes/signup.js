var express = require('express');
var fs = require('fs');
var router = express.Router();
var util = require('../utils/util.js')


router.post('/', function (req, res) {
    //console.log("post to /api/signup " + req.body);
    if (util.search(req.body.email) == false)
    {
        fs.appendFile('list.txt', req.body.email + '\r\n', function (err) {
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