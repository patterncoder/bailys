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
            //viewBag.beersAndMore.Menu.Sections.Section
            // beersAndMore.Menu.Sections.Section.map((obj) => {
            //     obj.MenuItems.MenuItem.map((tmp) => {
            //         if(tmp.hasOwnProperty("MenuLName")) {
            //             console.log("has property:", tmp.MenuLName);
            //         } else {
            //             console.log("does not have property", tmp);
            //         }
            //     })
            // })
            console.log(beersAndMore);
            viewBag.beersAndMore = beersAndMore;
            
            res.render('dining/beer', {  viewBag: viewBag })
        });


};



exports.getView = getData;