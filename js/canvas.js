/*newnewnew canvas newbie */

$(function() {
    var c = document.getElementById( "mon_canvas" );
    var ctx = c.getContext("2d");
    // ctx.lineWidth = 5;

// Background
    ctx.fillStyle = "fafafa";
    ctx.fillRect(50,50,250,250);

// Forms
    //15
    ctx.beginPath();
    ctx.arc(150,10,100,90,Math.PI*2,true);
    ctx.fillStyle = "fafafa";
});
