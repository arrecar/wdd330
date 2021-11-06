window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
}

//image from color to black and white
function manipulateImage() {
    var canvas = document.getElementById("demo7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 68, 68);

    var imageData = context.getImageData(0, 0, 200, 200);
    
    var red, green, blue, greyscale;
    
    for (var i = 0; i < imageData.data.length; i += 4) {
    red = imageData.data[i];
    green = imageData.data[i + 1];
    blue = imageData.data[i + 2];

    grayscale = red * 0.3 + green * 0.59 + blue * 0.11; 

    imageData.data[i] = grayscale; 
    imageData.data[i + 1] = grayscale;  
    imageData.data[i + 2] = grayscale;
    }
    context.putImageData(imageData, 0, 0);

}

manipulateImage();