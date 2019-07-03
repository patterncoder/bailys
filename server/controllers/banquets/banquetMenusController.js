/**
 * Created by patterncoder on 6/3/2015.
 */

var banquetsService = require('../../services/banquetsService');
var menuService = require('../../services/menuService');
var siteSettings = require('../../siteSettings');

var getView = function (req, res) {

    var viewBag = {};
    viewBag.title = "Banquet Menus";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            res.render('banquets/banquetmenus', {  viewBag: viewBag });
        });
};

var getViewBreakfast = function(req, res){
    var viewBag = {};
    viewBag.title = "Banquet Breakfast Menus";
    
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            return menuService.getMenuById(siteSettings.menus.banqBreakPreComp);
        })
        .then(function(banqBreakPreComp){
            viewBag.banqBreakPreComp = banqBreakPreComp;
            return menuService.getMenuById(siteSettings.menus.banqBreakCustom);
        })
        .then(function(banqBreakCustom){
            viewBag.banqBreakCustom = banqBreakCustom;
            res.render('banquets/banquetMenusBreakfast', {  viewBag: viewBag });
        });
};

var getViewLunch = function(req, res){
    var viewBag = {};
    viewBag.title = "Banquet Lunch Menus";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            return menuService.getMenuById(siteSettings.menus.banqLunchPreComp);
        })
        .then(function(banqLunchPreComp){
            viewBag.banqLunchPreComp = banqLunchPreComp;
            return menuService.getMenuById(siteSettings.menus.banqLunchCustom);
        })
        .then(function(banqLunchCustom){
            viewBag.banqLunchCustom = banqLunchCustom;
            res.render('banquets/banquetMenusLunch', {  viewBag: viewBag });
        });
    
};

var getViewDinner = function(req, res){
    var viewBag = {};
    viewBag.title = "Banquet Dinner Menus";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            return menuService.getMenuById(siteSettings.menus.banqDinnerPreComp);
        })
        .then(function(banqDinnerPreComp){
            viewBag.banqDinnerPreComp = banqDinnerPreComp;
            return menuService.getMenuById(siteSettings.menus.banqDinnerCustom);
        })
        .then(function(banqDinnerCustom){
            
            viewBag.banqDinnerCustom = banqDinnerCustom;
            // console.log(banqDinnerCustom.Menu.Sections.Section[0]);
            res.render('banquets/banquetMenusDinner', {  viewBag: viewBag });
        });;
};



exports.getView = getView;
exports.getViewBreakfast = getViewBreakfast;
exports.getViewLunch = getViewLunch;
exports.getViewDinner = getViewDinner;