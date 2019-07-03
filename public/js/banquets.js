


$(document).ready(function(){
    $.getJSON('http://oldtowndining.com/api/banquets.ashx?date=20150601', function(data){
    $('#dataHere').html(JSON.stringify(data));
    });
});