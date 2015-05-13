var users = require('../routes/users');
var index = require('../routes/index');
var signUpRoutes = require('../routes/signup');
var diningRoutes = require('../routes/dining');
var nightclubRoutes = require('../routes/nightclub');
var banquetRoutes = require('../routes/banquets');

module.exports = function (app) {

    app.use('/', index);
    app.use('/api/signup', signUpRoutes);
    //app.use('/users', users);
    app.use('/dining', diningRoutes);
    app.use('/nightclub', nightclubRoutes);
    app.use('/banquets', banquetRoutes);
    app.all('/api/*', function (req, res) {
        res.send(404);
    });

};