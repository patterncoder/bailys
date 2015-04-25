var fs = require('fs');
var util = {};

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