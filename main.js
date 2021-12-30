var mouseEvent = "empty";
var lastposx, lastposy;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "black";
var width = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentmousex = e.clientX - canvas.offsetLeft;
    currentmousey = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("lastposx=" + lastposx + "lastposy=" + lastposy);

        ctx.moveTo(lastposx, lastposy);

        console.log("currentposx=" + currentmousex + "currentposy" + currentmousey);

        ctx.lineTo(currentmousex, currentmousey);
        ctx.stroke();
    }
    lastposx = currentmousex;
    lastposy = currentmousey;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    currenttouchx = e.touches[0].clientX - canvas.offsetLeft;
    currenttouchy = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("lastposx=" + lastposx + "lastposy=" + lastposy);

        ctx.moveTo(lastposx, lastposy);

        console.log("currentposx=" + currenttouchx + "currentposy" + currenttouchy);

        ctx.lineTo(currenttouchx, currenttouchy);
        ctx.stroke();
    
    lastposx = currenttouchx;
    lastposy = currenttouchy;
}