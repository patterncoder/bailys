
/**
 * Created by patterncoder & Jesse Parnell on 12/18/2018.
 */
var entertainmentService = require('../../services/entertainmentService');
var menuService = require('../../services/menuService');
var eventsService = require('../../services/eventsService');
var siteSettings = require('../../siteSettings.js');




var getView = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Ring In 2020!";
    entertainmentService.getFutureMusicTop3()
        .then(function(music) {
            viewBag.schedule = music;
            console.log(viewBag.schedule);
            return menuService.getMenuById(siteSettings.menus.newYear);
        })
        .then(function(menu){
            viewBag.menu = menu;
            return eventsService.getEventsTopX();
        })
        .then(function(events){
            viewBag.events = events;
            res.render('dining/newYear', { title: "Menu", viewBag: viewBag })
        });

};



exports.getView = getView;
