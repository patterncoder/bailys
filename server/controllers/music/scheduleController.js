var request = require('request');
var util = require('../../utils/util');
var siteSettings = require('../../siteSettings.js');
var entertainmentService = require('../../services/entertainmentService');



var getView = function (req, res) {

    var viewBag = {};
    viewBag.title = "Entertainment Schedule";
    entertainmentService.getFutureMusic()
        .then(function(musicSchedule){
            viewBag.schedule = musicSchedule;
            res.render('music/schedule', {viewBag: viewBag})
        });


};


exports.getView = getView;


