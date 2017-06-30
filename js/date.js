/*
Give me the time mothafucka
 */



function getTime() {
    var time = new Date(hours,minutes);
    var hours = time.getHours();
    var minutes = time.getMinutes();
    return hours+':'+minutes
}
