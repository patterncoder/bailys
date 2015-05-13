/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('banquets/banquets', {title: "Banquets"});
});

router.get('/venues', function (req, res) {
    res.render('banquets/venues', {title: "Venues"});
});

router.get('/menu', function (req, res) {
    res.render('banquets/banquetMenus', {title: "Banquet Menus"});
});

router.get('/beveragepackages', function (req, res) {
    res.render('banquets/beveragepackages', { title: "Beverage Packages" });
});



module.exports = router;