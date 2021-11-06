//first canvas
//Filling brush
var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
//drawing rectangle
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

//second canvas draw with pattern
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    var img = new Image();
    img.src = "images/bg-bike.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };         
}

drawPattern();

//Third canvas draw gradient
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}
drawGradient();

//Draw circle
function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvCircle");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}
drawCircle();

//Save drawing
function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);



