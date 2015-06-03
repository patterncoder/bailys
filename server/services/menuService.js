var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var Q = require('q');

var getCurrentMenu = function(){

    var deferred = Q.defer();
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {


            var menu = JSON.parse(body);

            util.traverseJSONandFindKey(menu, 'MenuPrice', util.getPriceNoCents);

            deferred.resolve(menu);
        }
        else
        {
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;

};


exports.getCurrentMenu = getCurrentMenu;
