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
    beersAndMore: 3723,
    wineList: 3721,
    spirits: 601,
    cocktails: 3722,
    wineByGlass: 3708,
    newYear: 3712,
    valentines: 3715,

    banqBreakPreComp: 2706,
    banqBreakCustom: 2705,
    banqLunchPreComp: 2702,
    banqLunchCustom: 2700,
    banqDinnerPreComp: 2704,
    banqDinnerCustom: 2703,
    bottles: 2688
}

siteSettings.utilDateBack = 2;


module.exports = siteSettings;
