/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('nightclub/nightclub', {viewBag: {title: "Nightclub"}});
});


router.get('/menu', function (req, res) {
    res.render('nightclub/menu', {viewBag: {title: "Late Nite Bites"}});
});

router.get('/bottleservice', function (req, res) {
    res.render('nightclub/bottleservice', {viewBag: {title: "VIP Bottle Service"}});
});

router.get('/partypackage', function (req, res) {
    res.render('nightclub/partypackage', {viewBag: {title: "Party Packages"}});
});



module.exports = router;