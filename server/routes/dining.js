/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var menuController = require('../controllers/menuController');

router.get('/', function (req, res) {
    res.render('dining/dining', {viewBag: {title: "The Restaurant"}});
});

router.get('/menu', menuController.getMenu);

router.get('/beer', function (req, res) {
    res.render('dining/beer', {viewBag: {title: "Beers & More"}});
});

router.get('/wine', function (req, res) {
    res.render('dining/wine', {viewBag: {title: "Wine List"}});
});

router.get('/cocktails', function (req, res) {
    res.render('dining/cocktails', {viewBag: {title: "Specialty Cocktails"}});
});
router.get('/spirits', function (req, res) {
    res.render('dining/spirits', {viewBag: {title: "Distilled Spirits"}});
});

module.exports = router;