var banquetsService = require('../../services/banquetsService');
var menuService = require('../../services/menuService.js');
var siteSettings = require('../../siteSettings.js');
var _ = require("lodash");






var getView = function (req, res) {

    var viewBag = {};
    viewBag.title = "Party Add-ons";
    
    banquetsService.getFutureBookings()
        
        .then(function(banquets){
            viewBag.banquets = banquets;
            
            
            return menuService.getMenuById(siteSettings.menus.partyHors);
        })
        .then(function(menu){
            viewBag.menu = menu;
            return menuService.getMenuById(siteSettings.menus.partyDessert);
        })
        .then(function(partyDesserts){
            _.forEach(partyDesserts.Menu.Sections.Section, function(section){
                if (section.MenuItems.MenuItem && !Array.isArray(section.MenuItems.MenuItem)) {
                    var singleMenuItem = section.MenuItems.MenuItem
                    section.MenuItems.MenuItem = [singleMenuItem];
                }
            })
            
            viewBag.partyDesserts = partyDesserts;
            return menuService.getMenuById(siteSettings.menus.partyRental);
        })
        .then(function(partyRentals){
            viewBag.partyRentals = partyRentals;
            console.log(viewBag);
            res.render('banquets/partyaddons', {  viewBag: viewBag })
        });


};



exports.getView = getView;