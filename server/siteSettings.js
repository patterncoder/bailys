/**
 * Created by patterncoder on 5/4/2015.
 */

var siteSettings = {};

// integers correspond to menuID
siteSettings.apis = {baseUrl: "http://oldtowndining.com/api/",
    otdMenus: "menu.ashx?menuID=",
    otdEntertainment: "entertainment.ashx?date=",
    otdEvents: "events.ashx?date=",
    otdBanquets: "banquets.ashx?date="
}
siteSettings.menus = {main: 602}
siteSettings.utilDateBack = -20;

module.exports = siteSettings;
