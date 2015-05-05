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

util.traverseJSONandFindKey = function (o,key,method) {
    for (var i in o) {
        if (typeof(o[i]==='[object array]')){
            //for(var ai = 0; ai < o[i].length; ai++)
            //{
            //    util.traverseJSONandFindKey(o[i], key);
            //}
        }

        if (typeof(o[i])=="object") {

            util.traverseJSONandFindKey(o[i], key, method);

        }
        if (i === key){
           o[i] = method(o[i]) ;
        }
    }
}

util.getPriceNoCents = function(price){
    var num = parseFloat(price);
    var newPrice;

    if (parseInt(num) === 0){
        return '$Market';
    }
    else if((num*100)%100===0 ){
        newPrice = '$' + parseInt(num).toString();
        return newPrice;
    }
    else{
        newPrice = '$' + num.toFixed(2).toString();
        return  newPrice;
    }


}

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