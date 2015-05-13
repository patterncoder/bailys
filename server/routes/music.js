var express = require('express');
var router = express.Router();
var musicController = require('../controllers/musicController');


router.get('/', musicController.getMusic);




module.exports = router;