//para guardar imagen es: cxt1.save();
function getRed(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
 }

  function getGreen(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 1];
 }

  function getBlue(imageData, x, y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 2];
 }
 function greyScale(imageData){
   index = (x + y * imageData.width) * 4;
    var BlackAndWhite = (getRed(imageData, x, y)+ getGreen(imageData, x , y)+ getBlue(imageData, x , y))/3;
     imageData.data[index+0]=BlackAndWhite;
     imageData.data[index+1]=BlackAndWhite;
     imageData.data[index+2]=BlackAndWhite;
     imageData.data[index+3]=255;
 }
 function negativo(imageData){
   index = (x + y * imageData.width) * 4;
     imageData.data[index+0]=255-getRed(imageData, x, y);
     imageData.data[index+1]=255-getGreen(imageData, x, y);
     imageData.data[index+2]=255-getBlue(imageData, x, y);
     imageData.data[index+3]=255;
 }
 function sepia(imageData){
  index = (x + y * imageData.width) * 4;
    var calculoRed= (getRed(imageData, x, y) * 0.393) + (getGreen(imageData, x, y) * 0.769) + (getBlue(imageData, x, y) * 0.189)
    var calculoGreen= (getRed(imageData, x, y) * 0.349) + (getGreen(imageData, x, y) * 0.686) + (getBlue(imageData, x, y) * 0.168)
    var calculoBlue=(getRed(imageData, x, y) * 0.272) + (getGreen(imageData, x, y) * 0.534) + (getBlue(imageData, x, y) * 0.131)
     imageData.data[index+0]=calculoRed+30;
     imageData.data[index+1]=calculoGreen+25;
     imageData.data[index+2]=calculoBlue;
     imageData.data[index+3]=255;
 }
 function binarizacion (imageData){
  var binarizacion = (getRed(imageData, x, y) + getGreen(imageData, x, y) + getBlue(imageData, x, y)) / 3;
            if (binarizacion > 130) {
             index = (x + y * imageData.width) * 4;
             imageData.data[index+0]=0;
             imageData.data[index+1]=0;
             imageData.data[index+2]=0;
             imageData.data[index+3]=255;
                    }
            else {
                index = (x + y * imageData.width) * 4;
                imageData.data[index+0]=255;
                imageData.data[index+1]=255;
                imageData.data[index+2]=255;
                imageData.data[index+3]=255;
            }
            
 }
 function brillo(imageData){
  index = (x + y * imageData.width) * 4;
     imageData.data[index+0]=1.35*getRed(imageData, x, y);
     imageData.data[index+1]=1.35*getGreen(imageData, x, y);
     imageData.data[index+2]=1.35*getBlue(imageData, x, y);
     imageData.data[index+3]=255;
 }
 function saturacion (imageData){

     index = (x + y * imageData.width) * 4;
     var saturationValue = 2; 
      var luzRed = 0.3086;
      var luzGreen = 0.6094;
      var luzBlue = 0.0820;
      var az = (1 - saturationValue)*luzRed + saturationValue;
      var bz = (1 - saturationValue)*luzGreen;
      var cz = (1 - saturationValue)*luzBlue;
      var dz = (1 - saturationValue)*luzRed;
      var ez = (1 - saturationValue)*luzGreen + saturationValue;
      var fz = (1 - saturationValue)*luzBlue;
      var gz = (1 - saturationValue)*luzRed;
      var hz = (1 - saturationValue)*luzGreen;
      var iz = (1 - saturationValue)*luzBlue + saturationValue;
      var saturadoRed = (az * getRed(imageData, x, y) + bz * getGreen(imageData, x, y) + cz * getBlue(imageData, x, y)); 
      var saturadoGreen = (dz * getRed(imageData, x, y) + ez * getGreen(imageData, x, y) + fz * getBlue(imageData, x, y)); 
      var saturadodBlue = (gz * getRed(imageData, x, y)+ hz * getGreen(imageData, x, y) + iz * getBlue(imageData, x, y)); 
     imageData.data[index+0]=saturadoRed;
     imageData.data[index+1]=saturadoGreen;
     imageData.data[index+2]=saturadodBlue;
     imageData.data[index+3]=255;

 }
 function suavizado(imageData){

 }
 function detectorBordes(imageData){

 }
 function blur(imageData){

 }
 function contraste(imageData){
  var contraste=100;
    var factor = (259 * (contraste + 255)) / (255 * (259 - contraste));
     index = (x + y * imageData.width) * 4;
     imageData.data[index+0]=factor*(getRed(imageData, x, y)-128)+128;
     imageData.data[index+1]=factor*(getGreen(imageData, x, y)-128)+128;
     imageData.data[index+2]=factor*(getBlue(imageData, x, y)-128)+128;
     imageData.data[index+3]=255;
 }
 //funcion espejo
 //ctx.translate(2*this.height,0);
//ctx.scale(-1,1);