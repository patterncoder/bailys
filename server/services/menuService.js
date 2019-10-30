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
            (menu && menu.Menu && menu.Menu.Sections && menu.Menu.Sections.Section).forEach((section) => {
                section.MenuItems.MenuItem = Array.isArray(section.MenuItems.MenuItem) ? section.MenuItems.MenuItem : [section.MenuItems.MenuItem];
            });
            // // this fixes the issue where one of the objects did not have the MenuItems property.
            // for(var i = 0; i < menu.Menu.Sections.Section.length; ++i) {
            //     var section = menu.Menu.Sections.Section[i];
            //     if(!menu.Menu.Sections.Section[i].hasOwnProperty("MenuItems")) {
            //         menu.Menu.Sections.Section[i].MenuItems = {MenuItem: []}; //fix!
            //     }
            // }

            //console.log(menu.Menu.Sections.Section[1]);
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
