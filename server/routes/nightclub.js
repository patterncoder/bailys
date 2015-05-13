/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('nightclub/nightclub', {title: "Nightclub"});
});


router.get('/menu', function (req, res) {
    res.render('nightclub/nightclubmenu', {title: "Menu"});
});

router.get('/bottleservice', function (req, res) {
    res.render('nightclub/bottleservice', {title: "VIP Bottle Service"});
});

router.get('/partypackage', function (req, res) {
    res.render('nightclub/partypackage', {title: "Party Package"});
});



module.exports = router;