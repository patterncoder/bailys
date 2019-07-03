/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var menuController = require('../controllers/dining/menuController');
var beerController = require('../controllers/dining/beerController');
var cocktailsController = require('../controllers/dining/cocktailsController');
var winelistController = require('../controllers/dining/winelistController');
var wineByGlassController = require('../controllers/dining/wineByGlassController');
var spiritsController = require('../controllers/dining/spiritsController');
var diningController = require('../controllers/dining/diningController');
var happyHourController = require('../controllers/dining/happyHourController');
var wineWednesdayController = require('../controllers/dining/wineWednesdayController');
//var newYearController = require('../controllers/dining/newYearController');
var valentinesController = require('../controllers/dining/valentinesController');

router.get('/', diningController.getView);

router.get('/menu', menuController.getView);

router.get('/beer', beerController.getView);

router.get('/wine', winelistController.getView);

router.get('/wineByGlass', wineByGlassController.getView);

router.get('/cocktails', cocktailsController.getView);

router.get('/spirits', spiritsController.getView);

router.get('/happyHour', happyHourController.getView);

router.get('/wineWednesday', wineWednesdayController.getView);

//router.get('/newYear', newYearController.getView);

router.get('/valentines', valentinesController.getView);


module.exports = router;