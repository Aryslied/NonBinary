/*Give me the time mothafucka*/

$(function() {
    setInterval(function(){ getTime(); }, 1000);

    function getTime() {
        //GIVE IT IN HH:MM:SS FORMAT NOW
        var date = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

        //PUT THIS MOTHAFUCKIN TIME IN THE TITL'
        document.title = date + ' Nice Binary Clock';

        $('#time').html('<h1>' + date + '</h1>');
        displayClock(date);
    }

    function displayClock(hm) {
        //Put it in a binary clock FINALLYYYY
        backInBlack();
        var dateList = getBinaryTime(hm);
        var hours = dateList[0];
        var min = dateList[1];

        //display hours
        if (hours>=1000) {
            hours=hours-1000;
            hourBlock8("blue");
        }
        if (hours>=100) {
            hours=hours-100;
            hourBlock4("blue");
        }
        if (hours>=10) {
            hours=hours-10;
            hourBlock2("blue");
        }
        if (hours>=1) {
            hours=hours-1;
            hourBlock1("blue");
        }

        //display minutes
        if (min>=1000) {
            min=min-1000;
            minBLock8("green");
        }
        if (min>=100) {
            min=min-100;
            minBLock4("green");
        }
        if (min>=10) {
            min=min-10;
            minBLock2("green");
        }
        if (min>=1) {
            min=min-1;
            minBLock1("green");
        }

        center("purple");
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

    //In 1 line, with format, displayed
    var timeBin = hourBin.toString() + ':' + minBin.toString() + ':' + secBin.toString();
    $('#timeBin').html('<h2>' + timeBin + '</h2>');

    return [hourBin, minBin];
}
