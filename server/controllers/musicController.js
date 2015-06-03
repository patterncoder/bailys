var request = require('request');
var util = require('../utils/util');
var siteSettings = require('../siteSettings.js');
var entertainmentService = require('../services/entertainmentService');



var getData = function (req, res) {

    var viewBag = {};
    viewBag.title = "Entertainment Schedule";
    entertainmentService.getFutureMusic()
        .then(function(musicSchedule){
            viewBag.schedule = musicSchedule;
            res.render('music/schedule', {viewBag: viewBag})
        });


};

var getTop3List = function (req, res) {
    // pull together settings for url and util to get a sqlserver date string


};

exports.getMusic = getData;
exports.getTop3List = getTop3List;

