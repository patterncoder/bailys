/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var menuController = require('../controllers/dining/menuController');
var beerController = require('../controllers/dining/beerController');
var cocktailsController = require('../controllers/dining/cocktailsController');
var winelistController = require('../controllers/dining/winelistController');
var spiritsController = require('../controllers/dining/spiritsController');
var diningController = require('../controllers/dining/diningController');

router.get('/', diningController.getView);

router.get('/menu', menuController.getView);

router.get('/beer', beerController.getView);

router.get('/wine', winelistController.getView);

router.get('/cocktails', cocktailsController.getView);

router.get('/spirits', spiritsController.getView);

module.exports = router;