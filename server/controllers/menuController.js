﻿var request = require('request');
var siteSettings = require('../siteSettings.js');
var util = require('../utils/util');



var getData = function (req, res) {

    var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var viewBag = {};
            viewBag.title = "The Menu";
            var menu = JSON.parse(body);
            util.traverseJSONandFindKey(menu, 'MenuPrice', util.getPriceNoCents);
            viewBag.menu = menu;
            //console.log(body);
            res.render('dining/menu', { title: "Menu", viewBag: viewBag });
        }
    });

};



exports.getMenu = getData;
