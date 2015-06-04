
var entertainmentService = require('../../services/entertainmentService');
var menuService = require('../../services/menuService');
var eventsService = require('../../services/eventsService');




var getData = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "The Menu";
    entertainmentService.getFutureMusicTop3()
        .then(function(music) {
            viewBag.schedule = music;
            return menuService.getCurrentMenu()
        })
        .then(function(menu){
            viewBag.menu = menu;
            return eventsService.getEventsTopX();
        })
        .then(function(events){
            viewBag.events = events;
            res.render('dining/menu', { title: "Menu", viewBag: viewBag })
        });

};



exports.getView = getData;

