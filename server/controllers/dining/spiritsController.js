/**
 * Created by patterncoder on 6/2/2015.
 */
var entertainmentService = require('../../services/entertainmentService');
var eventsService = require('../../services/eventsService');
var menuService = require('../../services/menuService');
var siteSettings = require('../../siteSettings');




var getData = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Distilled Spirits";
    entertainmentService.getFutureMusicTop3()
        .then(function(music) {
            viewBag.schedule = music;
            return menuService.getMenuById(siteSettings.menus.spirits);
        })
        .then(function (menu){
            viewBag.menu = menu;
            return eventsService.getEventsTopX();
        })
        .then(function(events){
            viewBag.events = events;
            res.render('dining/spirits', {  viewBag: viewBag });
        });
        


};



exports.getView = getData;