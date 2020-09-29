/**
 * Created by patterncoder on 5/4/2015.
 */

var siteSettings = {};
// http://oldtowndining.com/api/menu.ashx?menuID=375
// integers correspond to menuID
siteSettings.apis = {
    baseUrl: "http://oldtowndining.com/api/",
    otdMenus: "menu.ashx?menuID=",
    otdWineList: "wineList.ashx?menuID=",
    otdEntertainment: "entertainment.ashx?date=",
    otdEvents: "events.ashx?date=",
    otdBanquets: "banquets.ashx?date=",
    otdDjs: "djSchedule.ashx?date="
}
siteSettings.menus = {
    main: 2686,
    partyHors: 2707,
    partyDessert: 373,
    partyRental: 375,
    beersAndMore: 5764,
    wineList: 5763,
    spirits: 601,
    cocktails: 5766,
    wineByGlass: 5763,
    newYear: 5742,
    valentines: 5744,

    banqBreakPreComp: 5767,
    banqBreakCustom: 5768,
    banqLunchPreComp: 2702,
    banqLunchCustom: 5727,
    banqDinnerPreComp: 2704,
    banqDinnerCustom: 2703,
    bottles: 5745
}

siteSettings.utilDateBack = 2;


module.exports = siteSettings;