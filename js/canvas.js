/* Using canvas to draw a binary clock */

$(function() {
    var c = $("#myCanvas");
    var context = c.get(0).getContext("2d");

    var xyOrigin = 0;
    var xyHalf = 300; // half of x and y max
    var lineWidth = 40;
    var pi = Math.PI;
    var angle = Math.asin(lineWidth/xyHalf/2)*2; // angle used in block hours
    context.lineWidth = lineWidth;

// Clock background
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, xyOrigin, pi*2);
    context.closePath();
    context.fillStyle = "black";
    context.fill();

// Clock hours
    //1
    function hourBlock1(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, pi*3/2+angle, -angle);
        context.moveTo(xyHalf+xyHalf*Math.cos(-angle), xyHalf-lineWidth);// FIXME /!!!!!!!\ FIND THE REAL COORDINATES
        context.lineTo(xyHalf+lineWidth, xyHalf-lineWidth);
        context.lineTo(xyHalf+lineWidth, xyOrigin+xyHalf*Math.sin(pi*3/2+angle));
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }
    //2
    function hourBlock2(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, angle, pi/2-angle);
        context.moveTo(xyHalf*2, xyHalf+lineWidth); // FIXME /!!!!!!!\ FIND THE REAL COORDINATES
        context.lineTo(xyHalf+lineWidth, xyHalf+lineWidth);
        context.lineTo(xyHalf+lineWidth, xyHalf*2);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

    //4
    function hourBlock4(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, pi/2+angle, pi-angle);
        context.moveTo(xyOrigin, xyHalf+lineWidth); // FIXME /!!!!!!!\ FIND THE REAL COORDINATES
        context.lineTo(xyHalf-lineWidth, xyHalf+lineWidth);
        context.lineTo(xyHalf-lineWidth, xyHalf*2);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

    //8
    function hourBlock8(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, pi+angle, pi*3/2-angle);
        context.moveTo(xyOrigin, xyHalf-lineWidth); // FIXME /!!!!!!!\ FIND THE REAL COORDINATES
        context.lineTo(xyHalf-lineWidth, xyHalf-lineWidth);
        context.lineTo(xyHalf-lineWidth, xyOrigin);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

// Clock minutes

    //Vertical

    //Horizontal
    //15
    function minBlock15(color) { //add rotation param
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, -angle/2, angle/2);
        context.fillStyle = color;
        context.closePath();
        context.fill();

        context.beginPath();
        context.moveTo(xyHalf, xyHalf);
        context.lineTo(xyHalf+xyHalf*Math.cos(angle/2), xyHalf);
        context.closePath();
        context.strokeStyle = color;
        context.stroke();
    }

    //30
    function minBlock30(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, pi-angle/2, pi+angle/2);
        context.fillStyle = color;
        context.closePath();
        context.fill();

        context.beginPath();
        context.moveTo(xyHalf, xyHalf);
        context.lineTo(xyHalf*Math.cos(pi-angle/2), xyHalf);
        context.closePath();
        context.strokeStyle = color;
        context.stroke();
    }

// Clock button
    function center(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, lineWidth*Math.sqrt(2), xyOrigin, pi*2);
        context.fillStyle = "#000";
        context.closePath();
        context.fill();

        context.beginPath();
        context.arc(xyHalf, xyHalf, 15, xyOrigin, pi*2);
        context.fillStyle = color;
        context.closePath();
        context.fill();
    }

    hourBlock1("blue");
    hourBlock2("blue");
    hourBlock4("blue");
    hourBlock8("blue");
    minBlock15("red");
    minBlock30("orangered");
    center("purple");

    $( "roundButton" ).click(function() {
        //on click display the clock
    })
});
