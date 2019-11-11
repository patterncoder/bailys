var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');
var menuFix = require('../utils/singleMenuItemFix');
var Q = require('q');
var json_parse = require('../utils/jsonParse');

var getMenuById = function(menuId){
    
    
    var deferred = Q.defer();
    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + menuId;
    
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var menu = JSON.parse(body);
            console.log(menu.Menu.Sections.Section);

            //if the object is an array, it will have a length,
            //if not, the length will be undefined which evaluates to false.
            if (menu.Menu.Sections.Section.length) 
                (menu && menu.Menu && menu.Menu.Sections && menu.Menu.Sections.Section).forEach((section) => {
                    if(section.hasOwnProperty("MenuItems")) {
                        section.MenuItems.MenuItem = Array.isArray(section.MenuItems.MenuItem) ? section.MenuItems.MenuItem : [section.MenuItems.MenuItem];
                    }
                });

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
