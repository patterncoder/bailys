/**
 * Created by patterncoder on 6/2/2015.
 */

var entertainmentService = require('../../services/entertainmentService');
var eventsService = require('../../services/eventsService');
var menuService = require('../../services/menuService');
var siteSettings = require('../../siteSettings.js');




var getData = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Beers & More";
    eventsService.getEventsTopX(5)
        .then(function(events){
            viewBag.events = events;
            return entertainmentService.getFutureMusicTop3()
        })

        .then(function(music) {
            viewBag.schedule = music;
            return menuService.getMenuById(siteSettings.menus.beersAndMore)
        })
        .then(function(beersAndMore){
            viewBag.beersAndMore = beersAndMore;
            
            res.render('dining/beer', {  viewBag: viewBag })
        });


};



exports.getView = getData;