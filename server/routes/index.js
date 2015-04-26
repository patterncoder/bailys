var express = require('express');
var router = express.Router();
var controller = require('../controllers/myController');
var request = require('request');
//var musicController = require('../controllers/musicController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Baily's" });
});
router.get('/dining', function (req, res) {
    res.render('dining', {title: "Dining"});
});
router.get('/nightclub', function (req, res) {
    res.render('nightclub', { title: "Nightclub" });
});
router.get('/music', function (req, res) {
    request('http://oldtowndining.com/api/entertainment.ashx', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var array = JSON.parse(body);
            res.render('music', { title: "Music", data: array });
        }
    });
    
});
router.get('/banquets', function (req, res) {
    res.render('banquets', { title: "Banquets" });
});
router.get('/about', function (req, res) {
    res.render('about', { title: "About" });
});
router.get('/about/history', function (req, res) {
    res.render('history', { title: "History" });
});
router.get('/users', controller.SendMessage);


module.exports = router; 
