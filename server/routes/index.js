var express = require('express');
var router = express.Router();
var controller = require('../controllers/myController');


/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Baily's" });
});

// unpublicized page for demonstrating the styles for the website
router.get('/styleguide', function(req, res){
    res.render('styleguide', { title: "Style Guide", viewBag: {title: "Style Guide"} });
});

router.get('/users', controller.SendMessage);


module.exports = router; 
