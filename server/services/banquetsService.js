/**
 * Created by patterncoder on 6/3/2015.
 */
var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var Q = require('q');

var getFutureBookings = function(){

    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdBanquets + util.getDateString(siteSettings.utilDateBack);
    var deferred = Q.defer();
    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            var banquetsSchedule = JSON.parse(body);
            //iterate over schedule and strip leading 0 from time
            banquetsSchedule.BanquetSchedule.Bookings.map(function(booking){
                    booking.Date = util.shortenDate(booking.Date);
                    booking.Time = util.removeLeadingZeroFromTime(booking.Time);

                }
            )


            deferred.resolve(banquetsSchedule);

        }
        else{
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;

};

exports.getFutureBookings = getFutureBookings;