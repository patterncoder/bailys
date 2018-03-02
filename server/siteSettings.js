/**
 * Created by patterncoder on 5/4/2015.
 */

var siteSettings = {};
// http://oldtowndining.com/api/menu.ashx?menuID=375
// integers correspond to menuID
siteSettings.apis = {baseUrl: "http://oldtowndining.com/api/",
    otdMenus: "menu.ashx?menuID=",
    otdWineList: "wineList.ashx?menuID=",
    otdEntertainment: "entertainment.ashx?date=",
    otdEvents: "events.ashx?date=",
    otdBanquets: "banquets.ashx?date=",
    otdDjs: "djSchedule.ashx?date="
}
siteSettings.menus = {main: 602, 
                        partyHors: 374,
                        partyDessert: 373,
                        partyRental: 375,
                        beersAndMore: 1678,
                        wineList: 1675,
                        spirits: 601,
                        cocktails: 626,
                        wineByGlass: 625,

                        banqBreakPreComp: 376,
                        banqBreakCustom: 1676,
                        banqLunchPreComp: 377,
                        banqLunchCustom: 369,
                        banqDinnerPreComp: 378,
                        banqDinnerCustom: 368,
                        bottles: 610}

siteSettings.utilDateBack = 2;


module.exports = siteSettings;
