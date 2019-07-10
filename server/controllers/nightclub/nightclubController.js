/**
 * Created by patterncoder on 6/8/2015.
 */
var djService = require('../../services/djService');






var getData = function (req, res) {

    //var url = siteSettings.apis.baseUrl + siteSettings.apis.otdMenus + siteSettings.menus.main;
    var viewBag = {};
    viewBag.title = "Restaurant & Nightclub";
    djService.getFutureDJs()
        .then(function(djSchedule) {
            viewBag.schedule = djSchedule;
            res.render('nightclub/nightclub', {  viewBag: viewBag });

        });


};



exports.getView = getData;