/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var banquetsController = require('../controllers/banquets/banquetsController');

router.get('/', banquetsController.getView);

router.get('/venues', function (req, res) {
    res.render('banquets/venues', {viewBag:{title: "Venues"}});
});

router.get('/menus', function (req, res) {
    res.render('banquets/banquetmenus', {viewBag:{title: "Menus"}});
});

router.get('/beveragepackages', function (req, res) {
    res.render('banquets/beveragepackages', {viewBag:{title: "Beverage Packages"}});
});



module.exports = router;