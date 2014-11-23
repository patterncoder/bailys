var express = require('express');
var router = express.Router();
var controller = require('../controllers/myController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/users', controller.SendMessage);


module.exports = router;
