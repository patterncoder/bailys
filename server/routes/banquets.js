/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var banquetsController = require('../controllers/banquets/banquetsController');
var banquetMenusController = require('../controllers/banquets/banquetMenusController');
var beveragePackageController = require('../controllers/banquets/beveragePackageController');
var venuesController = require('../controllers/banquets/venuesController');
var bookingController = require('../controllers/banquets/bookingController');
var partyAddonsController = require('../controllers/banquets/partyAddonsController');
var partyDesignController = require('../controllers/banquets/partyDesignController');

router.get('/', banquetsController.getView);

router.get('/venues', venuesController.getView);
router.get('/booking', bookingController.getView);

router.get('/menus', banquetMenusController.getView);
router.get('/menus/breakfast', banquetMenusController.getViewBreakfast );
router.get('/menus/lunch', banquetMenusController.getViewLunch );
router.get('/menus/dinner', banquetMenusController.getViewDinner );

router.get('/beverageservice', beveragePackageController.getView);

router.get('/partyAddons', partyAddonsController.getView);
router.get('/partyDesign', partyDesignController.getView);



module.exports = router;