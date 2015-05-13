/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var menuController = require('../controllers/menuController');

router.get('/', function (req, res) {
    res.render('dining', {title: "Dining"});
});

router.get('/menu', menuController.getMenu);

router.get('/beer', function (req, res) {
    res.render('beer', {title: "Beers & More"});
});

router.get('/wine', function (req, res) {
    res.render('wine', {title: "Wine List"});
});

router.get('/cocktails', function (req, res) {
    res.render('cocktails', {title: "Cocktails"});
});
router.get('/spirits', function (req, res) {
    res.render('spirits', {title: "Distilled Spirits"});
});

module.exports = router;