var express = require('express');
var router = express.Router();
var controller = require('../controllers/myController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Baily's" });
});
router.get('/banquets', function (req, res) {
    res.render('banquets');
});
router.get('/users', controller.SendMessage);


module.exports = router;
