/* Using canvas to draw a binary clock */

var c = $("#myCanvas");
var context = c.get(0).getContext("2d");

var xyOrigin = 0;
var xyHalf = 300; // half of x and y max
var lineWidth = 40;
var pi = Math.PI;
var angle = Math.asin(lineWidth/xyHalf/2)*2; // angle used in block hours
context.lineWidth = lineWidth;

// Clock background
function backInBlack() {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, xyOrigin, pi*2);
    context.closePath();
    context.fillStyle = "#2E2E2E";
    context.fill();
}

// Clock hours
//1
function hourBlock1(color) {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi*3/2+angle, -angle);
    context.moveTo(xyHalf+xyHalf*Math.cos(-angle), xyHalf-lineWidth);
    context.lineTo(xyHalf+lineWidth, xyHalf-lineWidth);
    context.lineTo(xyHalf+lineWidth, xyHalf+xyHalf*Math.sin(pi*3/2+angle));
    context.closePath();
    context.fillStyle = color;
    context.fill();
}
//2
function hourBlock2(color) {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, angle, pi/2-angle);
    context.moveTo(xyHalf+xyHalf*Math.cos(angle), xyHalf+lineWidth);
    context.lineTo(xyHalf+lineWidth, xyHalf+lineWidth);
    context.lineTo(xyHalf+lineWidth, xyHalf+xyHalf*Math.sin(pi/2-angle));
    context.closePath();
    context.fillStyle = color;
    context.fill();
}

//4
function hourBlock4(color) {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi/2+angle, pi-angle);
    context.moveTo(xyHalf+xyHalf*Math.cos(pi-angle), xyHalf+lineWidth);
    context.lineTo(xyHalf-lineWidth, xyHalf+lineWidth);
    context.lineTo(xyHalf-lineWidth, xyHalf+xyHalf*Math.sin(pi/2+angle));
    context.closePath();
    context.fillStyle = color;
    context.fill();
}

//8
function hourBlock8(color) {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi+angle, pi*3/2-angle);
    context.moveTo(xyHalf+xyHalf*Math.cos(pi+angle), xyHalf-lineWidth);
    context.lineTo(xyHalf-lineWidth, xyHalf-lineWidth);
    context.lineTo(xyHalf-lineWidth, xyHalf+xyHalf*Math.sin(pi*3/2-angle));
    context.closePath();
    context.fillStyle = color;
    context.fill();
}

// Clock minutes

//Vertical
function minBlock1(color) {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi*3/2-angle/2, pi*3/2+angle/2);
    context.fillStyle = color;
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(xyHalf, xyHalf/2-lineWidth);
    context.lineTo(xyHalf, xyHalf+xyHalf*Math.sin(pi*3/2+angle/2));
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
}

function minBlock2(color) {
    context.beginPath();
    context.moveTo(xyHalf, xyHalf);
    context.lineTo(xyHalf, xyHalf/2);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
}

function minBlock4(color) {
    context.beginPath();
    context.moveTo(xyHalf, xyHalf);
    context.lineTo(xyHalf, xyHalf*3/2);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
}

function minBlock8(color) {
    context.beginPath();
    context.arc(xyHalf, xyHalf, xyHalf, pi/2-angle/2, pi/2+angle/2);
    context.fillStyle = color;
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(xyHalf, xyHalf*3/2+lineWidth);
    context.lineTo(xyHalf, xyHalf+xyHalf*Math.sin(pi/2+angle/2));
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
}

//Horizontal
//15
function minBlock15(color, rotationValue) { //add rotation param
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
function minBlock30(color, rotationValue) {
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

// Clock button+black circle center necessary to hide minutes block
function center(color) {
    //black circle
    context.beginPath();
    context.arc(xyHalf, xyHalf, lineWidth*Math.sqrt(2), xyOrigin, pi*2);
    context.fillStyle = "#2E2E2E";
    context.closePath();
    context.fill();

    //purple button circle
    context.beginPath();
    context.arc(xyHalf, xyHalf, 25, xyOrigin, pi*2);
    context.fillStyle = color;
    context.closePath();
    context.fill();
}


$( "roundButton" ).click(function() {
    //on click display the clock
});
