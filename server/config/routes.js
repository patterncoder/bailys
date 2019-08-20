// var users = require('../routes/users');
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

    return app;
};