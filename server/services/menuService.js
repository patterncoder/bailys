var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var Q = require('q');

var getMenuById = function(menuId){
    
    
    var deferred = Q.defer();
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + menuId;
    
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {


            var menu = JSON.parse(body);

            //util.traverseJSONandFindKey(menu, 'MenuPrice', util.getPriceNoCents);

            deferred.resolve(menu);
        }
        else
        {
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;

};

var getWineListById = function(menuId){
    var deferred = Q.defer();
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdWineList + menuId;
    request(url, function(error,response,body){
        if(!error && response.statusCode == 200){
            var menu = JSON.parse(body);
            deferred.resolve(menu);
        }
        else {
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;
};


exports.getMenuById = getMenuById;
exports.getWineListById = getWineListById;
