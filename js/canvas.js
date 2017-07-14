/* Using canvas to draw a binary clock */

$(function() {
    var c = $("#myCanvas");
    var context = c.get(0).getContext("2d");

    var xyHalf = 300; // half of x and y max
    var lineWidth = 80;
    var pi = Math.PI;

// Clock hours
    //1
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi, pi*3/2,true);
    context.moveTo(xyHalf, 0);
    context.lineTo(xyHalf, xyHalf);
    context.lineTo(xyHalf*2, xyHalf);
    context.fillStyle = "cyan";
    context.closePath();
    context.fill();

    //2
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, 0, pi/2);
    context.moveTo(xyHalf*2, xyHalf);
    context.lineTo(xyHalf, xyHalf);
    context.lineTo(xyHalf, xyHalf*2);
    context.closePath();
    context.fill();

    //4
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi, pi/2,true);
    context.moveTo(0, xyHalf);
    context.lineTo(xyHalf, xyHalf);
    context.lineTo(xyHalf, xyHalf*2);
    context.closePath();
    context.fill();

    //8
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi, pi+pi/2);
    context.moveTo(0, xyHalf);
    context.lineTo(xyHalf, xyHalf);
    context.lineTo(xyHalf, 0);
    context.closePath();
    context.fill();

// Clock big black cross using lines to center it easily
    context.lineWidth = lineWidth;

    //Vertical
    context.beginPath();
    context.moveTo(xyHalf, 0);
    context.lineTo(xyHalf, xyHalf*2);
    context.closePath();
    context.stroke();

    //Horizontal
    context.beginPath();
    context.moveTo(0, xyHalf);
    context.lineTo(xyHalf*2, xyHalf);
    context.closePath();
    context.stroke();

// Clock minutes
    context.lineWidth = lineWidth/2;

    //Vertical

    //Horizontal
    //30
    context.strokeStyle = "red";
    context.beginPath();
    //context.arc(xyHalf, xyHalf, xyHalf, pi-, pi+)
    context.moveTo(30, xyHalf);
    context.lineTo(300, xyHalf);
    context.closePath();
    context.stroke();

    //15
    context.beginPath();
    //context.arc(xyHalf, xyHalf, xyHalf, pi-pi/4, pi+pi/4)
    context.moveTo(300, xyHalf);
    context.lineTo(570, xyHalf);
    context.closePath();
    context.stroke();

// Clock black circle center
    context.beginPath();
    context.arc(xyHalf, xyHalf, lineWidth/2, 0, pi*2);
    context.fillStyle = "black";
    context.closePath();
    //context.fill();

// Clock button
    context.beginPath();
    context.arc(xyHalf, xyHalf, 15, 0, pi*2);
    context.fillStyle = "purple";
    context.closePath();
    context.fill();



    $( "roundButton" ).click(function() {
        //on click display the clock
    })
});
