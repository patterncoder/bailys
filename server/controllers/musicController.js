var request = require('request');
var util = require('../utils/util');
var siteSettings = require('../siteSettings.js');



var getData = function (req, res) {
    // pull together settings for url and util to get a sqlserver date string
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdEntertainment + util.getDateString(-2);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var viewBag = {};
            viewBag.title = "Entertainment Schedule";
            var musicSchedule = JSON.parse(body);

            viewBag.schedule = musicSchedule;
            //console.log(body);
            res.render('music/schedule', {viewBag: viewBag});
        }
    });

};

var getTop3List = function (req, res) {
    // pull together settings for url and util to get a sqlserver date string
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdEntertainment + util.getDateString(-2);
    console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            

            var musicSchedule = JSON.parse(body);
            var top3List = { Schedule: { ScheduleItem: [] } };
            for (var i = 0; i < 5; i++) {
                top3List.Schedule.ScheduleItem[i] = musicSchedule.Schedule.ScheduleItem[i]
            }
            //console.log(body);
            res.render('music', { title: "Music", schedule: musicSchedule });
        }
    });

};

exports.getMusic = getData;
exports.getTop3List = getTop3List;

