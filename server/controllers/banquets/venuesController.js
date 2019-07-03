/**
 * Created by patterncoder on 6/3/2015.
 */

var banquetsService = require('../../services/banquetsService');






var getData = function (req, res) {

    var viewBag = {};
    viewBag.title = "Banquets Venues";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            res.render('banquets/venues', {  viewBag: viewBag })
        });


};



exports.getView = getData;