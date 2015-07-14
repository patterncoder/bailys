var fs = require('fs');
var util = {};

util.removeLeadingZeroFromTime = function(time){
    while(time.charAt(0)==='0'){
        time = time.substr(1);

    }
    return time;
};

util.wrapLine = function(text){
    if (text.length > 50)
    {
        var words = text.split(' ');
        words.splice(5,0,"<br/>");
        text = words.join(' ');
        return text;
    }
    else
    {
        return text
    }
}

util.shortenDate = function(date){
    var newDate;
    var parts = date.split(' ');
    switch(parts[0]){
        case "Monday":
            newDate = "Mon, ";
            break;
        case "Tuesday":
            newDate = "Tue, ";
            break;
        case "Wednesday":
            newDate = "Wed, ";
            break;
        case "Thursday":
            newDate = "Thu, ";
            break;
        case "Friday":
            newDate = "Fri, ";
            break;
        case "Saturday":
            newDate = "Sat, ";
            break;
        case "Sunday":
            newDate = "Sun, ";
            break;
    }

    switch(parts[1]){
        case "January":
            newDate += "Jan ";
            break;
        case "February":
            newDate += "Feb ";
            break;
        case "March":
            newDate += "Mar ";
            break;
        case "April":
            newDate += "Apr ";
            break;
        case "May":
            newDate += "May ";
            break;
        case "June":
            newDate += "Jun ";
            break;
        case "July":
            newDate += "Jul ";
            break;
        case "August":
            newDate += "Aug ";
            break;
        case "September":
            newDate += "Sep ";
            break;
        case "October":
            newDate += "Oct ";
            break;
        case "November":
            newDate += "Nov ";
            break;
        case "December":
            newDate += "Dec ";
            break;


    }

    newDate += parts[2];
    return newDate;

};

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

        if (typeof(o[i])==="object") {

            util.traverseJSONandFindKey(o[i], key, method);

        }

        if (i === key){
           o[i] = method(o[i]) ;
        }
    }
};



util.getPriceNoCents = function(price, removeCents, options){
    removeCents = removeCents || false;
    options = options || {replaceZero: "$Market"};
    var num = parseFloat(price);
    var newPrice;
    
    if (parseInt(num) === 0){
        
        return options.replaceZero;
        
    }
    else if((num*100)%100===0 ){
        if(removeCents){
            newPrice = '$' + parseInt(num).toString();
            return newPrice;
        }
        else{
            newPrice = '$' + num.toFixed(2).toString();
            return newPrice;
        }
        
    }
    else{
        newPrice = '$' + num.toFixed(2).toString();
        return  newPrice;
    }


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