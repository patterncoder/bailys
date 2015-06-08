/**
 * Created by patterncoder on 5/11/2015.
 */
var express = require('express');
var router = express.Router();
var nightclubController = require('../controllers/nightclub/nightclubController');
var nightclubMenuController = require('../controllers/nightclub/nightclubMenuController');
var bottleServiceController = require('../controllers/nightclub/bottleServiceController');
var partyPackageController = require('../controllers/nightclub/partyPackageController');


router.get('/', nightclubController.getView);

router.get('/menu', nightclubMenuController.getView);

router.get('/bottleservice', bottleServiceController.getView);

router.get('/partypackage', partyPackageController.getView);



module.exports = router;