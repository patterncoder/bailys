var express = require('express');
var router = express.Router();
var musicScheduleController = require('../controllers/music/scheduleController');
var musicInfoController = require('../controllers/music/musicHomeController');
var musicBookingController = require('../controllers/music/bookingInfoController');

router.get('/', musicInfoController.getView);


router.get('/schedule', musicScheduleController.getView);

router.get('/booking', musicBookingController.getView);




module.exports = router;