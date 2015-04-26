var request = require('request');

var data;

var getData = function () {
    request('http://oldtowndining.com/api/entertainment.ashx', function (error, response, body) {
        if (!error && response.statusCode == 200)
        {
            //console.log(body);
            return body;
        }
    });
};



exports.getMusic = getData;

