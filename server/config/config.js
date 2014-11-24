var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

console.log(rootPath);
module.exports = {
    development: {
        rootPath: rootPath,
        //db: 'mongodb://localhost/tipminer',
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        //db: 'mongodb://patterncoder:y5EQJ5m7C3@ds030607.mongolab.com:30607/tipminer',
        port: process.env.PORT || 80
    }



    // use below command to connect mongo shell to mongolab
    // mongo ds030607.mongolab.com:30607/tipminer -u patterncoder -p y5EQJ5m7C3

};