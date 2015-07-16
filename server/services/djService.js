/**
 * Created by patterncoder on 6/8/2015.
 */
var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var Q = require('q');

var getFutureDJs = function () {
    // pull together settings for url and util to get a sqlserver date string
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdDjs + util.getDateString(siteSettings.utilDateBack);
    var deferred = Q.defer();
    request(url, function (error, response, body) {
        console.log("requesting djs")
        if (!error && response.statusCode == 200) {
            var djSchedule = JSON.parse(body);

            deferred.resolve(djSchedule);
//             if(djSchedule.Schedule.ScheduleItems){
//                 djSchedule.Schedule.ScheduleItems.map(function(booking){
//                     booking.Date = util.shortenDate(booking.Date);
//                     booking.Time = util.removeLeadingZeroFromTime(booking.Time);
//                 });
// 
//                 
//             }
        }
        else{
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;

};

var getFutureDJsTop3 = function(){
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdEntertainment + util.getDateString(siteSettings.utilDateBack);

    var deferred = Q.defer();

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var djSchedule = JSON.parse(body);
            var top3List = { Schedule: { ScheduleItems: [] } };
            for (var i = 0; i < 3; i++) {
                top3List.Schedule.ScheduleItems[i] = djSchedule.Schedule.ScheduleItems[i]
            }
            deferred.resolve(top3List);
        }
        else
        {
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;
};

exports.getFutureDJs = getFutureDJs;
exports.getFutureDJsTop3 = getFutureDJsTop3;