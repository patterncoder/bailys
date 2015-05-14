var express = require('express');
var router = express.Router();
var musicController = require('../controllers/musicController');

router.get('/', function (req, res) {
    res.render('music/music', {viewBag: {title: "Music at Baily's"}});
});


router.get('/schedule', musicController.getMusic);

router.get('/booking', function (req, res) {
    res.render('music/booking', {viewBag: {title: "Booking Information"}});
});




module.exports = router;