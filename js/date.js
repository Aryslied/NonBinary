/*
Give me the time mothafucka
 */

$(function() {
    setInterval(function(){ getTime(); }, 1000);

function getTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var date = hours+':'+minutes+':'+seconds;

    //PUT THIS MOTHAFUCKIN TIME IN THE TITL'
    document.title = date + ' Black Standard Clock';

    $('#time').html('<h1>' + date + '</h1>');



    console.log(date);
}

});
