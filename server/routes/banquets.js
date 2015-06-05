/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var banquetsController = require('../controllers/banquets/banquetsController');
var banquetMenusController = require('../controllers/banquets/banquetMenusController');
var beveragePackageController = require('../controllers/banquets/beveragePackageController');
var venuesController = require('../controllers/banquets/venuesController');

router.get('/', banquetsController.getView);

router.get('/venues', venuesController.getView);

router.get('/menus', banquetMenusController.getView);

router.get('/beveragepackages', beveragePackageController.getView);



module.exports = router;