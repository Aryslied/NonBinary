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

    //Put it in a binary clock FINALLYYYY
    function displayClock(d) {
        //reset clock
        backInBlack();
        var hour = Number(d[0]+d[1]);
        var minutes = Number(d[3]+d[4]);

        //obtain bin
        var hourBin = dec2bin(hour%12);//TODO display 12 and not 0
        var minBin = dec2bin(minutes%15);

        //display hourBin
        if (hourBin>=1000) {
            hourBin=hourBin-1000;
            hourBlock8("blue");
        }
        if (hourBin>=100) {
            hourBin=hourBin-100;
            hourBlock4("blue");
        }
        if (hourBin>=10) {
            hourBin=hourBin-10;
            hourBlock2("blue");
        }
        if (hourBin>=1) {
            hourBin=hourBin-1;
            hourBlock1("blue");
        }

        //display minutes
        if (minutes>=30) {
            minutes=minutes-30;
            minBlock30("orangered");
        }
        if (minutes>=15) {
            minutes=minutes-15;
            minBlock15("orangered");
        }

        if (minBin>=1000) {
            minBin=minBin-1000;
            minBlock8("green");
        }
        if (minBin>=100) {
            minBin=minBin-100;
            minBlock4("green");
        }
        if (minBin>=10) {
            minBin=minBin-10;
            minBlock2("green");
        }
        if (minBin>=1) {
            minBin=minBin-1;
            minBlock1("green");
        }

        center("purple");
    }
});

/*binaryConvert: function(number) returning string in binary...*/
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
