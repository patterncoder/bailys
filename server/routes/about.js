/**
 * Created by patterncoder on 5/12/2015.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('about/about', {title: "About"});
});
router.get('/history', function (req, res) {
    res.render('about/history', {title: "Our Story"});
});





module.exports = router;