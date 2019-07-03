var request = require('request');
var util = require('../../utils/util');
var siteSettings = require('../../siteSettings.js');
var entertainmentService = require('../../services/entertainmentService');



var getView = function (req, res) {

    var viewBag = {};
    viewBag.title = "Booking Your Band at Baily's";
    entertainmentService.getFutureMusic()
        .then(function(musicSchedule){
            viewBag.schedule = musicSchedule;
            res.render('music/booking', {viewBag: viewBag})
        });


};


exports.getView = getView;