/*newnewnew canvas newbie */

$(function() {
    var c = $("#myCanvas");
    var context = c.get(0).getContext("2d");
    // context.lineWidth = 5;

// Background
    //context.fillRect(50,50,250,250);


// Clock background
    context.arc(300, 300, 300, 0, Math.PI*2);//note: too small with 300
    context.fill();

// Clock hours
    context.beginPath();
    context.arc(300, 300, 300, Math.PI, Math.PI+Math.PI/2);
    context.moveTo(0, 300); // Set the path origin
    context.lineTo(300, 300); // Set the path destination
    context.fillStyle = "cyan";
    context.closePath();
    context.fill();


//Clock big black cross
    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(300, 0);
    context.lineTo(300, 600);
    context.fillStyle = "red";
    context.closePath();
    context.fill();

// Clock button
    context.beginPath();
    context.arc(300, 300, 15, 0, Math.PI*2);
    context.fillStyle = "purple";
    context.closePath();
    context.fill();



    $( "roundButton" ).click(function() {
        //
    })
});
