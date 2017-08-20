var imageData;
var image1 = new Image();
image1.src = "images/paisaje.jpeg";
image1.onload = function(){
	ctx.drawImage(this, 0, 0);
	imageData = ctx.getImageData(0,0,this.width, this.height);
	ctx.putImageData(imageData,0,0);
}
function getRed(imageData, x, y){
	index = (x + y * imageData.width)*4;
	return imageData.data[index + 0];
}

function getGreen(imageData, x, y){
	index = (x + y * imageData.width)*4;
	return imageData.data[index + 1];
}

function getBlue(imageData, x, y){
	index = (x + y * imageData.width)*4;
	return imageData.data[index + 2];
}