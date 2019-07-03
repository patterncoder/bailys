/**
 * Created by patterncoder on 5/12/2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('about/about', {viewBag: {title: "About"}});
});
router.get('/history', function (req, res) {
    res.render('about/history', {viewBag: {title: "History"}});
});

router.get('/employment', function (req, res) {
    res.render('about/employment', {viewBag: {title: "Employment"}});
});




module.exports = router;