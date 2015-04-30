var request = require('request');



var getData = function (req, res) {
    request('http://oldtowndining.com/api/menu.ashx', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var menu = JSON.parse(body);
            //console.log(body);
            res.render('menu', { title: "Menu", menu: menu });
        }
    });

};



exports.getMenu = getData;

