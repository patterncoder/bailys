var users = require('../routes/users');
var indexRoutes = require('../routes/index');
var signUpRoutes = require('../routes/signup');
var diningRoutes = require('../routes/dining');
var nightclubRoutes = require('../routes/nightclub');
var musicRoutes = require('../routes/music');
var banquetRoutes = require('../routes/banquets');
var aboutRoutes = require('../routes/about');
// const request = require("request");
// const bodyParser = require("body-parser");

module.exports = function (app) {
    console.log("routes.js app:", app);

    app.use('/', indexRoutes);

    app.use('/api/signup', signUpRoutes);

    //app.use('/users', users);

    app.use('/dining', diningRoutes);
    app.use('/nightclub', nightclubRoutes);
    app.use('/music', musicRoutes);
    app.use('/banquets', banquetRoutes);
    app.use('/about', aboutRoutes);

    app.all('/api/*', function (req, res) {
        res.send(404);
    });

    //const jsonParser = bodyParser.json();

    //POST for the inquiry form on banquets.
    // app.post("/inquiry", jsonParser, (req, res) => {

    //     console.log(req.body);

    //     try {
    //         console.log("sending request...");
    //         request.post("http://67.205.162.241:1984/inquiry", {json: req.body}, (err, response, body) => {
    //             //console.log(response);
    //             //send the response from the url above back.
    //             res.send(response.statusCode);
    //         });

    //     } catch (e) {
    //         res.send(e);
    //     }

    // });

    return app;

};