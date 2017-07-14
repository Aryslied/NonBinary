/* Using canvas to draw a binary clock */

$(function() {
    var c = $("#myCanvas");
    var context = c.get(0).getContext("2d");

    var xyOrigin = 0;
    var xyHalf = 300; // half of x and y max
    var lineWidth = 40;
    var pi = Math.PI;
    var angle = Math.asin(lineWidth/xyHalf/2)*2; // angle used in block hours

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
        context.arc(xyHalf, xyHalf, xyHalf, -angle, pi*3/2+angle,true);
        context.moveTo(xyHalf+lineWidth, xyOrigin);
        context.lineTo(xyHalf+lineWidth, xyHalf-lineWidth);
        context.lineTo(xyHalf*2, xyHalf-lineWidth);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }
    //2
    function hourBlock2(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, xyOrigin, pi/2);
        context.moveTo(xyHalf*2, xyHalf);
        context.lineTo(xyHalf, xyHalf);
        context.lineTo(xyHalf, xyHalf*2);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

    //4
    function hourBlock4(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, pi, pi/2,true);
        context.moveTo(0, xyHalf);
        context.lineTo(xyHalf, xyHalf);
        context.lineTo(xyHalf, xyHalf*2);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

    //8
    function hourBlock8(color) {
        context.beginPath();
        context.arc(xyHalf, xyHalf, xyHalf, pi, pi+pi/2);
        context.moveTo(0, xyHalf);
        context.lineTo(xyHalf, xyHalf);
        context.lineTo(xyHalf, xyOrigin);
        context.closePath();
    }

    hourBlock1("blue");

// Clock minutes
    context.lineWidth = lineWidth;

    //Vertical

    //Horizontal
    //30
    function minBlock30(color) {
        context.beginPath();
        //context.arc(xyHalf, xyHalf, xyHalf, pi-, pi+)
        context.moveTo(30, xyHalf);
        context.lineTo(xyHalf, xyHalf);
        context.closePath();
        context.strokeStyle = color;
        context.stroke();
    }

    //15
    function minBlock15(color) {
        context.beginPath();
        //context.arc(xyHalf, xyHalf, xyHalf, pi-pi/4, pi+pi/4)
        context.moveTo(xyHalf, xyHalf);
        context.lineTo(570, xyHalf);
        context.closePath();
        context.strokeStyle = color;
        context.stroke();
    }

// Clock black circle center
    context.beginPath();
    context.arc(xyHalf, xyHalf, lineWidth, xyOrigin, pi*2);
    context.fillStyle = "black";
    context.closePath();
    //context.fill();

// Clock button
    context.beginPath();
    context.arc(xyHalf, xyHalf, 15, xyOrigin, pi*2);
    context.fillStyle = "purple";
    context.closePath();
    context.fill();



    $( "roundButton" ).click(function() {
        //on click display the clock
    })
});
