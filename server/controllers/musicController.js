var request = require('request');
var util = require('../utils/util');



var getData = function (req, res) {
    
    var url = 'http://oldtowndining.com/api/entertainment.ashx?date=' + util.getDateString(-2);
    console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            
            var musicSchedule = JSON.parse(body);
            //console.log(body);
            res.render('music', { title: "Music", schedule: musicSchedule });
        }
    });

};



exports.getMusic = getData;

