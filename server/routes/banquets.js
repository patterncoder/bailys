/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('banquets', {title: "Banquets"});
});

router.get('/menu', function (req, res) {
    res.render('banquetMenus', {title: "banquetMenus"});
});

router.get('/venues', function (req, res) {
    res.render('venues', {title: "Venues"});
});

router.get('/beveragepackages', function (req, res) {
    res.render('beveragepackages', { title: "Beverage Packages" });
});



module.exports = router;