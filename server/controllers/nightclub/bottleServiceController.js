/**
 * Created by Mr.74 on 7/15/2015.
 */
var djService = require('../../services/djService');
var menuService = require('../../services/menuService');
var siteSettings = require('../../siteSettings.js');





var getData = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Table Service";
    djService.getFutureDJs()
        .then(function(djSchedule) {
            viewBag.schedule = djSchedule;
            return menuService.getMenuById(siteSettings.menus.bottles);
        })
        .then(function(bottles) {
            viewBag.bottles = bottles;
            res.render('nightclub/bottleservice', {  viewBag: viewBag });

        });


};



exports.getView = getData;