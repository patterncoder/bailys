var request = require('request');
var util = require('../utils/util');
var siteSettings = require('../siteSettings.js');
var entertainmentService = require('../services/entertainmentService');



var getData = function (req, res) {

    entertainmentService.getFutureMusic()
        .then(function(viewBag){
            res.render('music/schedule', {viewBag: viewBag})
        });


};

var getTop3List = function (req, res) {
    // pull together settings for url and util to get a sqlserver date string


};

exports.getMusic = getData;
exports.getTop3List = getTop3List;

