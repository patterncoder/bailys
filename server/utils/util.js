var fs = require('fs');
var util = {};

util.search = function (name) {
   
    var array = util.returnArray('list.txt');
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