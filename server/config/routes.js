var users = require('../routes/users');
var home = require('../routes/index');


module.exports = function (app) {

    app.use('/', home);
    //app.use('/users', users);

};