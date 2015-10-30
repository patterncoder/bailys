var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var Q = require('q');

var getFutureMusic = function () {
    // pull together settings for url and util to get a sqlserver date string
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdEntertainment + util.getDateString(siteSettings.utilDateBack);
    
    var deferred = Q.defer();
    
    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            var musicSchedule = JSON.parse(body);
            deferred.resolve(musicSchedule);
            // musicSchedule.Schedule.ScheduleItems.map(function(item){
            //     
            // });
            
            // if(musicSchedule.Schedule.ScheduleItems){
            //         
            //     }
        }
        else{
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;

};

var getFutureMusicTop3 = function(){
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdEntertainment + util.getDateString(siteSettings.utilDateBack);

    var deferred = Q.defer();

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var musicSchedule = JSON.parse(body);
            deferred.resolve(musicSchedule);

        }
        else{
            deferred.reject(new Error(error));
        }
        // if (!error && response.statusCode == 200) {
        //     var musicSchedule = JSON.parse(body);
        //     var top3List = { Schedule: { ScheduleItems: [] } };
        //     //console.log(musicSchedule);
        //     //console.log(musicSchedule.Schedule.ScheduleItems.length + ' is the count');
        //     //console.log(musicSchedule.Schedule);
        //     if (musicSchedule.Schedule.ScheduleItems.length > 3) {
        //         for (var i = 0; i < 3; i++) {
        //             top3List.Schedule.ScheduleItems[i] = musicSchedule.Schedule.ScheduleItems[i]
        //         }
        //         deferred.resolve(top3List);
        //     } else if (musicSchedule.Schedule === 'undefined') {
        //         deferred.resolve({});
        //     }
        //     else {
        //         top3List.Schedule = musicSchedule.Schedule;
        //         deferred.resolve(top3List);
        //     }
            
        // }
        // else
        // {
        //     deferred.reject(new Error(error));
        // }
    });
    return deferred.promise;
};

exports.getFutureMusic = getFutureMusic;
exports.getFutureMusicTop3 = getFutureMusicTop3;