var banquetsService = require('../../services/banquetsService');
var menuService = require('../../services/menuService.js');
var siteSettings = require('../../siteSettings.js');






var getView = function (req, res) {

    var viewBag = {};
    viewBag.title = "Party Add-ons";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            console.log(viewBag.banquets);
            //hard coded menuid here
            return menuService.getMenuById(siteSettings.menus.partyHors);
        })
        .then(function(menu){
            viewBag.menu = menu;
            return menuService.getMenuById(siteSettings.menus.partyDessert);
        })
        .then(function(partyDesserts){
            viewBag.partyDesserts = partyDesserts;
            return menuService.getMenuById(siteSettings.menus.partyRental);
        })
        .then(function(partyRentals){
            viewBag.partyRentals = partyRentals;
            
            res.render('banquets/partyaddons', {  viewBag: viewBag })
        });


};



exports.getView = getView;