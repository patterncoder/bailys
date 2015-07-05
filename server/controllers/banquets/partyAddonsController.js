var banquetsService = require('../../services/banquetsService');






var getData = function (req, res) {

    var viewBag = {};
    viewBag.title = "Party Add-ons";
    banquetsService.getFutureBookings()
        .then(function(banquets){
            viewBag.banquets = banquets;
            res.render('banquets/partyaddons', {  viewBag: viewBag })
        });


};



exports.getView = getData;