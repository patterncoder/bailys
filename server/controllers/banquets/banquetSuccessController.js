/**
 * Created by Jesse Parnell on 9/2/2019.
 */

var banquetsService = require('../../services/banquetsService');

var getData = function (req, res) {
    console.log("banquetSuccessController req:", req.params);

    var viewBag = {};
    viewBag.title = "Thank You!";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            //- viewBag.name = req.body.name;
            res.render('banquets/banquetSuccess', {  viewBag: viewBag });
        });


};



exports.getView = getData;