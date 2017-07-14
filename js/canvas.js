/* Using canvas to draw a binary clock */

$(function() {
    var c = $("#myCanvas");
    var context = c.get(0).getContext("2d");

// Clock hours
    //1
    context.beginPath();
    context.arc(300, 300, 300, Math.PI, Math.PI+Math.PI/2,true);
    context.moveTo(300, 0); // Set the path origin
    context.lineTo(300, 300); // Set the path destination
    context.lineTo(600, 300);
    context.fillStyle = "blue";
    context.closePath();
    context.fill();

    //2
    context.beginPath();
    context.arc(300, 300, 300, 0, Math.PI/2);
    context.moveTo(600, 300); // Set the path origin
    context.lineTo(300, 300); // Set the path destination
    context.lineTo(300, 600);
    context.fillStyle = "yellow";
    context.closePath();
    context.fill();

    //4
    context.beginPath();
    context.arc(300, 300, 300, Math.PI, Math.PI/2,true);
    context.moveTo(0, 300); // Set the path origin
    context.lineTo(300, 300); // Set the path destination
    context.lineTo(300, 600);
    context.fillStyle = "red";
    context.closePath();
    context.fill();

    //8
    context.beginPath();
    context.arc(300, 300, 300, Math.PI, Math.PI+Math.PI/2);
    context.moveTo(0, 300); // Set the path origin
    context.lineTo(300, 300); // Set the path destination
    context.lineTo(300, 0);
    context.fillStyle = "cyan";
    context.closePath();
    context.fill();

// Clock big black cross
    //context.strokeStyle = "red"; //test line: to see it red
    context.lineWidth = 80;

    //Vertical
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 600);
    context.closePath();
    context.stroke();

    //Horizontal
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(600, 300);
    context.closePath();
    context.stroke();

// Clock minutes
    //Vertical
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 600);
    context.closePath();
    context.stroke();

    //Horizontal
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(600, 300);
    context.closePath();
    context.fill();


// Clock button
    context.beginPath();
    context.arc(300, 300, 15, 0, Math.PI*2);
    context.fillStyle = "purple";
    context.closePath();
    context.fill();



    $( "roundButton" ).click(function() {
        //on click display the clock
    })
});
