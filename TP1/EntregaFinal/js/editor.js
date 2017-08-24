let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var width= canvas.width;
var height= canvas.height ;
var imageData;
var image1 = new Image();
image1.src = "images/portfolio/paisaje.jpg";

image1.onload = function(){
  canvas.width =this.width;
  canvas.height =this.height;
  ctx.drawImage(this, 0, 0);
  imageData = ctx.getImageData(0, 0, this.width, this.height);

}
function changeImage(imageData){
  ctx.drawImage(image1, 0, 0);
  ctx.putImageData(imageData, 0,0);

}

btnGuardar();

function btnGuardar(){
  var save = document.getElementById("guardarImagen");
  save.addEventListener("click", function(){
    canvas.toDataURL("images/jpg");
  });
}

function btnSeleccionar(){
  var select = document.getElementById("selectImage");
  select.addEventListener("change", image1.onload());
}

function btnRestaurar(){
  var restore = document.getElementById("restaurarImagen");
  restore.addEventListener("click", image1.onload());
}

function greyScale(){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4;
     var BlackAndWhite = (getRed(imageData, x, y)+ getGreen(imageData, x , y)+ getBlue(imageData, x , y))/3;
     imageData.data[index+0]=BlackAndWhite;
     imageData.data[index+1]=BlackAndWhite;
     imageData.data[index+2]=BlackAndWhite;
     imageData.data[index+3]=255;

   }
 }

 changeImage(imageData);
}

btnGreyScale();

function btnGreyScale(){
  var escalaGris = document.getElementById("greyScale");
  escalaGris.addEventListener("click", function(){
    greyScale();
  });
}

function negativo(){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4;
     imageData.data[index+0]=255-getRed(imageData, x, y);
     imageData.data[index+1]=255-getGreen(imageData, x, y);
     imageData.data[index+2]=255-getBlue(imageData, x, y);
     imageData.data[index+3]=255;
   }
 }

 changeImage(imageData);

}

btnNegativo();

function btnNegativo(){
  var negative = document.getElementById("negativo");
  negative.addEventListener("click", function(){
    negativo();
  });
}

function sepia(){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    index = (x + y * imageData.width) * 4;
    var calculoRed= (getRed(imageData, x, y) * 0.393) + (getGreen(imageData, x, y) * 0.769) + (getBlue(imageData, x, y) * 0.189)
    var calculoGreen= (getRed(imageData, x, y) * 0.349) + (getGreen(imageData, x, y) * 0.686) + (getBlue(imageData, x, y) * 0.168)
    var calculoBlue=(getRed(imageData, x, y) * 0.272) + (getGreen(imageData, x, y) * 0.534) + (getBlue(imageData, x, y) * 0.131)
    imageData.data[index+0]=calculoRed+30;
    imageData.data[index+1]=calculoGreen+25;
    imageData.data[index+2]=calculoBlue;
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);
}

btnSepia();

function btnSepia(){
  var Sepia = document.getElementById("sepia");
  Sepia.addEventListener("click", function(){
    sepia();
  });
}

function binarizacion (){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    var binarizacion =110;
    var v = (0.2126 * getRed(imageData, x, y) + 0.7152 * getGreen(imageData, x, y) + 0.0722 * getBlue(imageData, x, y) >= binarizacion) ? 255 : 0;
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0]=v;
    imageData.data[index+1]=v;
    imageData.data[index+2]=v;
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);

}

function btnBinarizacion(){
  var binary = document.getElementById("binarizacion");
  binary.addEventListener("click", function(){
    binarizacion();
  });
}

btnBinarizacion();

function brillo(brightnessValue){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0]=brightnessValue*getRed(imageData, x, y);
    imageData.data[index+1]=brightnessValue*getGreen(imageData, x, y);
    imageData.data[index+2]=brightnessValue*getBlue(imageData, x, y);
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);

}
btnBrillo();

function btnBrillo(){
  var brightness = document.getElementById("brillo");
  brightness.addEventListener("click", function(){
    var rango = document.getElementById("range");
    rango.addEventListener("change", function(){

     brillo(this.value-49.7); 
   
});    
  });
}

function saturacion (saturationValue){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4; 
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
 }

 changeImage(imageData);

}

btnSaturacion();

function btnSaturacion(){
  var saturation = document.getElementById("saturacion");
  saturation.addEventListener("click", function(){
  var rango = document.getElementById("range");
    rango.addEventListener("change", function(){
     saturacion(this.value-49); 
   
});
});    
  }



function contraste(contrastValue){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    var factor = (259 * (contrastValue + 255)) / (255 * (259 - contrastValue));
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0]=factor*(getRed(imageData, x, y)-128)+128;
    imageData.data[index+1]=factor*(getGreen(imageData, x, y)-128)+128;
    imageData.data[index+2]=factor*(getBlue(imageData, x, y)-128)+128;
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);
}

btnContraste();

function btnContraste(){
  var contrast = document.getElementById("contraste");
  contrast.addEventListener("click", function(){
   var rango = document.getElementById("range");
    rango.addEventListener("change", function(){
     contraste(this.value-50); 
   
});
});    
  }


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
