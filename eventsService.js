/**
 * Created by patterncoder on 6/3/2015.
 */
var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var Q = require('q');

var getEventsTopX = function(topX){

    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdEvents + '20150101';
    var deferred = Q.defer();
    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            var eventsSchedule = JSON.parse(body);
            deferred.resolve(eventsSchedule);

        }
        else{
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;

};

exports.getEventsTopX = getEventsTopX;