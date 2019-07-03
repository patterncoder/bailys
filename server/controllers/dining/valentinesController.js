
/**
 * Created by patterncoder & Modified by Jesse Parnell on 1/29/2019.
 */

var entertainmentService = require('../../services/entertainmentService');
var menuService = require('../../services/menuService');
var eventsService = require('../../services/eventsService');
var siteSettings = require('../../siteSettings.js');




var getView = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Valentines";
    entertainmentService.getFutureMusicTop3()
        .then(function(music) {
            viewBag.schedule = music;
            console.log(viewBag.schedule);
            return menuService.getMenuById(siteSettings.menus.valentines);
        })
        .then(function(menu){
            viewBag.menu = menu;
            return eventsService.getEventsTopX();
        })
        .then(function(events){
            viewBag.events = events;
            res.render('dining/valentines', { title: "Menu", viewBag: viewBag })
        });

};



exports.getView = getView;
