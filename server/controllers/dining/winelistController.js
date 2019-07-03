/**
 * Created by patterncoder on 6/2/2015.
 */
var entertainmentService = require('../../services/entertainmentService');
var eventsService = require('../../services/eventsService');
var menuService = require('../../services/menuService');
var siteSettings = require('../../siteSettings');




var getData = function (req, res) {

    
    var viewBag = {};
    viewBag.title = "Wine List";
    entertainmentService.getFutureMusicTop3()
        .then(function(music) {
            viewBag.schedule = music;
            return eventsService.getEventsTopX();
        })
        .then(function(events){
            viewBag.events = events;
            return menuService.getWineListById(siteSettings.menus.wineList)
        })
        .then(function(menu){
            viewBag.menu = menu;
            res.render('dining/wine', {  viewBag: viewBag });
        });


};



exports.getView = getData;