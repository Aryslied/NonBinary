/*Give me the time mothafucka*/

$(function() {
    setInterval(function(){ getTime(); }, 1000);

    function getTime() {
        //GIVE IT IN HH:MM:SS FORMAT NOW
        var date = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

        //PUT THIS MOTHAFUCKIN TIME IN THE TITL'
        document.title = date + ' Black Standard Clock';

        $('#time').html('<h1>' + date + '</h1>');

        getBinaryTime(date);

        //Show in in console
        //console.log(date);
    }

});

/*binaryConvert: function(number) returning string in binary...*/
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function getBinaryTime(d) {
    //Separates h, m, s and gives it as dec
    var hour = Number(d[0]+d[1]);
    var minutes = Number(d[3]+d[4]);
    var seconds = Number(d[6]+d[7]);

    //Convert into binaries
    var hourBin = dec2bin (hour);
    var minBin = dec2bin (minutes);
    var secBin = dec2bin (seconds);

    //Displays it
    $('#hBin').html('<h2>' + hourBin + '</h2>');
    $('#mBin').html('<h2>' + minBin + '</h2>');
    $('#sBin').html('<h2>' + secBin + '</h2>');

    //In 1 line, with format, displayed
    var timeBin = hourBin.toString() + ':' + minBin.toString() + ':' + secBin.toString();
    $('#timeBin').html('<h2>' + timeBin + '</h2>');
}
