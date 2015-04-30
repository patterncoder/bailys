var fs = require('fs');
var util = {};

util.getDateString = function (daysOffset) {
    
    var offset = daysOffset || 0;
    var now = new Date();
    now.setDate(now.getDate() + offset);
    var date = now.getDate() ;
    var month = now.getMonth() + 1;
    var year = now.getUTCFullYear();
    var dateString;
    dateString = year.toString();
    dateString += month > 0 && month < 10 ? "0" + month.toString() : month.toString();
    dateString += date > 0 && date < 10 ? "0" + date.toString() : date.toString();
    return dateString;

};

util.search = function (filePath, name) {
   
    var array = util.returnArray(filePath);
    for (i in array)
    {
       if (array[i] == name) return true;
    }
    return false;
};

util.returnArray = function (file) {
    
    var array = fs.readFileSync(file).toString().split("\r\n");
    return array;
    
};

module.exports = util;