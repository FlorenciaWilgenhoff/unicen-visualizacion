     let canvas = document.getElementById("canvas");
     let ctx = canvas.getContext("2d"); 
     ctx.fillStyle = "#FFFF00";
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     //figuras sin drag
    function ganar(){ //VER SI ESTA BIEN
      for (var i = 0; i < drawnFiguresNivel2.length; i++) {
        if (drawnFiguresNivel2[i].encastre==true)return true;
      }
    }
    function intercambioFiguras(){
      if(ganar()==true){
        //acca hago lo del panel
      }
    }
    function SquareSinDrag(paramPosX, paramPosY, paramX, paramY, color){
      this.posX = paramPosX;
      this.posY = paramPosY;
      this.xW = paramX;
      this.yH = paramY;
      this.color = color;
      this.arrastrar = false;
      this.tipo = 1;
    }

    SquareSinDrag.prototype.draw =  function (){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.fillRect(this.posX, this.posY, this.xW, this.yH);
      ctx.lineWidth = 5;
      ctx.lineCap ="round";
      ctx.strokeRect (this.posX, this.posY, this.xW, this.yH);
      ctx.closePath();
    }



    function CircleSinDrag(paramPosX, paramPosY, paramRadio, color){
      this.posX = paramPosX;
      this.posY = paramPosY;
      this.radio = paramRadio;
      this.color = color;
      this.tipo = 2;

    }
    CircleSinDrag.prototype.draw =  function (){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.radio , 0, Math.PI*2);
      ctx.lineWidth = 5;
      ctx.lineCap ="round";
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.closePath();
    }


    function TriangleSinDrag(paramPosX, paramPosY, paramSideT, color){
      this.posX = paramPosX;
      this.posY = paramPosY;
      this.sideT = paramSideT;
      this.color = color;
      this.tipo = 3;




    }
    TriangleSinDrag.prototype.draw =  function (){
     ctx.fillStyle = this.color;
     ctx.beginPath();
     ctx.moveTo(this.posX, this.posY);
     ctx.lineTo(this.posX+this.sideT , this.posY);
     ctx.lineTo(this.posX+(this.sideT/2), this.posY-this.sideT);
     ctx.lineTo(this.posX, this.posY); 
     ctx.closePath();
     ctx.stroke();
   }

   function RectangleSinDrag(paramPosX, paramPosY, paramA, paramL, color){
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.widthRectangle = paramA;
    this.heightRectangle = paramL;
    this.color = color;
    this.tipo = 4;



  }
  RectangleSinDrag.prototype.draw =  function (){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.posX, this.posY, this.widthRectangle, this.heightRectangle);
    ctx.lineWidth = 5;
    ctx.lineCap ="round";
    ctx.strokeRect (this.posX, this.posY, this.widthRectangle, this.heightRectangle);
    ctx.closePath();
  }

  function DiamondSinDrag(paramPosX, paramPosY,paramSideD, color){
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.sideD = paramSideD;
    this.color = color;
    this.tipo = 5;




  }
  DiamondSinDrag.prototype.draw =  function (){
   ctx.fillStyle = this.color;
   ctx.beginPath();
   ctx.moveTo(this.posX, this.posY);
   ctx.lineTo(this.posX+this.sideD , this.posY+this.sideD);
   ctx.lineTo(this.posX, this.posY+(this.sideD*2));
   ctx.lineTo(this.posX-this.sideD, this.posY+this.sideD);
   ctx.closePath();
   ctx.stroke();
 }

 function ParallelogramSinDrag(paramPosX, paramPosY, paramSideP, color ){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.sideP = paramSideP;
  this.color = color;
  this.tipo = 6;
}
ParallelogramSinDrag.prototype.draw =  function (){
  ctx.fillStyle = this.color;
  let sideMulti = this.sideP*2;
  let sideDiv = this.sideP/2;
  ctx.beginPath();
  ctx.moveTo(this.posX, this.posY);
  ctx.lineTo(this.posX + sideMulti , this.posY);
  ctx.lineTo(this.posX +this.sideP, this.posY + sideMulti );
  ctx.lineTo(this.posX,  this.posY  + sideMulti);
  ctx.lineTo(this.posX - sideDiv*2, this.posY + sideMulti);
  ctx.closePath();
  ctx.stroke();

}
     //figuras con drag
     function Square(paramPosX, paramPosY, paramX, paramY, color){
      this.posX = paramPosX;
      this.posY = paramPosY;
      this.xW = paramX;
      this.yH = paramY;
      this.color = color;
      this.tipo = 1;
      this.arrastrar = false;
      let cuadrado = this;
      canvas.addEventListener("mousedown", function (e) {   
        cuadrado.mouseDown(e);
      });
      canvas.addEventListener("mousemove", function (e) {
       cuadrado.mouseMove(e); 
     });
      canvas.addEventListener("mouseup", function(e) {  
        cuadrado.mouseUp(e);
      });
      this.encastre = false;
      function encastre(){
        for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
          if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
            (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
            (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
            (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
            (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
            this.encastre = true;
          this.posX=drawnFiguresNivelSinDrag[i].posX;
          this.posY=drawnFiguresNivelSinDrag[i].posY;
          drawnFiguresNivelSinDrag[i].arrastrar=false;
        }
      }
    }
    Square.prototype.draw =  function (){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.fillRect(this.posX, this.posY, this.xW, this.yH);
      ctx.lineWidth = 5;
      ctx.lineCap ="round";
      ctx.strokeRect (this.posX, this.posY, this.xW, this.yH);
      ctx.closePath();
    }

    Square.prototype.mouseDown =  function (e){
      var rect = canvas.getBoundingClientRect();
      var cX = e.clientX-rect.left;
      var cY = e.clientY-rect.top;
      var d1 = (this.posX + this.xW);
      var d2 = (this.posY + this.yH);

      if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
       this.arrastrar = true;
     } 
   }


   Square.prototype.mouseMove=  function (e){

    if(this.arrastrar){
      var rect = canvas.getBoundingClientRect();
      this.setPos(e.clientX - rect.left, e.clientY - rect.top);
      newCanvas();
    }
  }

  Square.prototype.mouseUp=  function (e){
    this.arrastrar = false;
  }

  Square.prototype.setPos=  function (posX, posY){
    this.clear();
    this.posX = posX;
    this.posY = posY;
    this.draw();

  }

  Square.prototype.clear=  function (){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    this.draw();
  }


  function Circle(paramPosX, paramPosY, paramRadio, color){
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = color;
    let circulo = this;
    this.tipo = 2;
    this.encastre = false;
    canvas.addEventListener("mousedown", function (e) {
      circulo.mouseDown(e);
    });
    canvas.addEventListener("mousemove", function (e) {
      circulo.mouseMove(e);
    });
    canvas.addEventListener("mouseup", function(e) {  
      circulo.mouseUp(e);
    });
    function encastre(){
      for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
        if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
          (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
          (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
          (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
          (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
          this.encastre = true;
        this.posX=drawnFiguresNivelSinDrag[i].posX;
        this.posY=drawnFiguresNivelSinDrag[i].posY;
        drawnFiguresNivelSinDrag[i].arrastrar=false;
          //redibujar el canvas sin esta figura draggeable
        }
      }
    }
    Circle.prototype.draw =  function (){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.radio , 0, Math.PI*2);
      ctx.lineWidth = 5;
      ctx.lineCap ="round";
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.closePath();
    }

    Circle.prototype.mouseDown =  function (e){
      var rect = canvas.getBoundingClientRect();
      var cX = e.clientX-rect.left;
      var cY = e.clientY-rect.top;
      var d1= Math.sqrt(Math.pow(cX-this.posX,2)+Math.pow(cY-this.posY,2));
      if(d1 <  this.radio){
        this.arrastrar = true;
      } 

    }

    Circle.prototype.mouseMove=  function (e){

      if(this.arrastrar){
        var rect = canvas.getBoundingClientRect();
        this.setPos(e.clientX - rect.left, e.clientY - rect.top);
        newCanvas();
      }
    }

    Circle.prototype.mouseUp=  function (e){
      this.arrastrar = false;
    }

    Circle.prototype.setPos=  function (posX, posY){
      this.clear();
      this.posX = posX;
      this.posY = posY;
      this.draw();

    }

    Circle.prototype.clear=  function (){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      this.draw();
    }

    function Triangle(paramPosX, paramPosY, paramSideT, color){
      this.posX = paramPosX;
      this.posY = paramPosY;
      this.sideT = paramSideT;
      this.color = color;
      let triangulo = this;
      this.tipo = 3;
      this.encastre = false;
      canvas.addEventListener("mousedown", function (e) {
        triangulo.mouseDown(e);
      });
      canvas.addEventListener("mousemove", function (e) {
        triangulo.mouseMove(e);
      });
      canvas.addEventListener("mouseup", function(e) {  
        triangulo.mouseUp(e);
      });
      function encastre(){
        for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
          if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
            (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
            (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
            (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
            (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
            this.encastre = true;
          this.posX=drawnFiguresNivelSinDrag[i].posX;
          this.posY=drawnFiguresNivelSinDrag[i].posY;
          drawnFiguresNivelSinDrag[i].arrastrar=false;
        }
      }


    }
    Triangle.prototype.draw =  function (){
     ctx.fillStyle = this.color;
     ctx.beginPath();
     ctx.moveTo(this.posX, this.posY);
     ctx.lineTo(this.posX+this.sideT , this.posY);
     ctx.lineTo(this.posX+(this.sideT/2), this.posY-this.sideT);
     ctx.lineTo(this.posX, this.posY); 
     ctx.closePath();
     ctx.stroke();
   }


   Triangle.prototype.mouseDown =  function (e){
    var rect = canvas.getBoundingClientRect();
    var cX = e.clientX-rect.left;
    var cY = e.clientY-rect.top;
    var d1 = (this.posX + this.sideT);
    var d2 = (this.posY + this.sideT);

    if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
     this.arrastrar = true;
   } 
 }


 Triangle.prototype.mouseMove=  function (e){

  if(this.arrastrar){
    var rect = canvas.getBoundingClientRect();
    this.setPos(e.clientX - rect.left, e.clientY - rect.top);
    newCanvas(); 
  }
}

Triangle.prototype.mouseUp=  function (e){
  this.arrastrar = false;
}

Triangle.prototype.setPos=  function (posX, posY){
  this.clear();
  this.posX = posX;
  this.posY = posY;
  this.draw();

}

Triangle.prototype.clear=  function (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.draw();
}
function Rectangle(paramPosX, paramPosY, paramA, paramL, color){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.widthRectangle = paramA;
  this.heightRectangle = paramL;
  this.color = color;
  let rectangle = this; 
  this.tipo = 4;
  this.encastre = false;
  canvas.addEventListener("mousedown", function (e) {
    rectangle.mouseDown(e);
  });
  canvas.addEventListener("mousemove", function (e) {
    rectangle.mouseMove(e);
  });
  canvas.addEventListener("mouseup", function(e) {  
    rectangle.mouseUp(e);
  });
  function encastre(){
    for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
      if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
        (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
        (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
        (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
        (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
        this.encastre = true;
      this.posX=drawnFiguresNivelSinDrag[i].posX;
      this.posY=drawnFiguresNivelSinDrag[i].posY;
      drawnFiguresNivelSinDrag[i].arrastrar=false;
    }
  }


}
Rectangle.prototype.draw =  function (){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.fillRect(this.posX, this.posY, this.widthRectangle, this.heightRectangle);
  ctx.lineWidth = 5;
  ctx.lineCap ="round";
  ctx.strokeRect (this.posX, this.posY, this.widthRectangle, this.heightRectangle);
  ctx.closePath();
}

Rectangle.prototype.mouseDown =  function (e){
  var rect = canvas.getBoundingClientRect();
  var cX = e.clientX-rect.left;
  var cY = e.clientY-rect.top;
  var d1 = (this.posX + this.widthRectangle);
  var d2 = (this.posY + this.heightRectangle);

  if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
   this.arrastrar = true;
 } 
}


Rectangle.prototype.mouseMove=  function (e){

  if(this.arrastrar){
    var rect = canvas.getBoundingClientRect();
    this.setPos(e.clientX - rect.left, e.clientY - rect.top);
    newCanvas(); 
  }
}

Rectangle.prototype.mouseUp=  function (e){
  this.arrastrar = false;
}

Rectangle.prototype.setPos=  function (posX, posY){
  this.clear();
  this.posX = posX;
  this.posY = posY;
  this.draw();

}

Rectangle.prototype.clear=  function (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.draw();
}

function Diamond(paramPosX, paramPosY,paramSideD, color){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.sideD = paramSideD;
  this.color = color;
  let diamond = this;
  this.tipo = 5;
  this.encastre = false;
  canvas.addEventListener("mousedown", function (e) {
    diamond.mouseDown(e);
  });
  canvas.addEventListener("mousemove", function (e) {
    diamond.mouseMove(e);
  });
  canvas.addEventListener("mouseup", function(e) {  
    diamond.mouseUp(e);
  });
  function encastre(){
    for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
      if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
        (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
        (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
        (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
        (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
       this.encastre = true;
     this.posX=drawnFiguresNivelSinDrag[i].posX;
     this.posY=drawnFiguresNivelSinDrag[i].posY;
     drawnFiguresNivelSinDrag[i].arrastrar=false;
   }
 }


}
Diamond.prototype.draw =  function (){
 ctx.fillStyle = this.color;
 ctx.beginPath();
 ctx.moveTo(this.posX, this.posY);
 ctx.lineTo(this.posX+this.sideD , this.posY+this.sideD);
 ctx.lineTo(this.posX, this.posY+(this.sideD*2));
 ctx.lineTo(this.posX-this.sideD, this.posY+this.sideD);
 ctx.closePath();
 ctx.stroke();
}

Diamond.prototype.mouseDown =  function (e){
  var rect = canvas.getBoundingClientRect();
  var cX = e.clientX-rect.left;
  var cY = e.clientY-rect.top;
  var d1 = (this.posX + this.sideD);
  var d2 = (this.posY + this.sideD);

  if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
   this.arrastrar = true;
 } 
}


Diamond.prototype.mouseMove=  function (e){

  if(this.arrastrar){
    var rect = canvas.getBoundingClientRect();
    this.setPos(e.clientX - rect.left, e.clientY - rect.top);
    newCanvas();
  }
}

Diamond.prototype.mouseUp=  function (e){
  this.arrastrar = false;
}

Diamond.prototype.setPos=  function (posX, posY){
  this.clear();
  this.posX = posX;
  this.posY = posY;
  this.draw();

}

Diamond.prototype.clear=  function (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.draw();
}

function Hexagon(paramPosX, paramPosY,  paramSideH ,color){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.sideH = paramSideH;
  this.color = color;
  let hexagon = this;
  this.tipo = 6;
  this.encastre = false;
  canvas.addEventListener("mousedown", function (e) {
    hexagon.mouseDown(e);
  });
  canvas.addEventListener("mousemove", function (e) {
    hexagon.mouseMove(e);
  });
  canvas.addEventListener("mouseup", function(e) {  
    hexagon.mouseUp(e);
  });

  function encastre(){
    for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
      if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
        (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
        (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
        (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
        (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
        this.encastre = true;
      this.posX=drawnFiguresNivelSinDrag[i].posX;
      this.posY=drawnFiguresNivelSinDrag[i].posY;
      drawnFiguresNivelSinDrag[i].arrastrar=false;
    }
  }
}
Hexagon.prototype.draw =  function (){
  ctx.fillStyle = this.color;
  let sideMulti = this.sideH*2;
  let sideDiv = this.sideH/2;
  ctx.beginPath();
  ctx.moveTo(this.posX, this.posY);
  ctx.lineTo(this.posX + this.sideH , this.posY);
  ctx.lineTo(this.posX + this.sideH + sideDiv , this.posY + this.sideH);
  ctx.lineTo(this.posX + this.sideH, this.posY  + sideMulti);
  ctx.lineTo(this.posX, this.posY + sideMulti);
  ctx.lineTo(this.posX - sideDiv , this.posY + this.sideH );
  ctx.closePath();
  ctx.stroke();


}

Hexagon.prototype.mouseDown =  function (e){
  var rect = canvas.getBoundingClientRect();
  var cX = e.clientX-rect.left;
  var cY = e.clientY-rect.top;
  var d1 = (this.posX + this.sideH);
  var d2 = (this.posY + this.sideH);

  if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
   this.arrastrar = true;
 } 
}


Hexagon.prototype.mouseMove=  function (e){

  if(this.arrastrar){
    var rect = canvas.getBoundingClientRect();
    this.setPos(e.clientX - rect.left, e.clientY - rect.top);
    newCanvas(); 
  }
}
Hexagon.prototype.mouseUp=  function (e){
  this.arrastrar = false;
}

Hexagon.prototype.setPos=  function (posX, posY){
  this.clear();
  this.posX = posX;
  this.posY = posY;
  this.draw();

}

Hexagon.prototype.clear=  function (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.draw();
}


function Pentagon(paramPosX, paramPosY, paramSide ,color){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.side = paramSide;
  this.color = color;
  let pentagon = this;
  this.tipo = 7;
  this.encastre = false;
  canvas.addEventListener("mousedown", function (e) {
    pentagon.mouseDown(e);
  });
  canvas.addEventListener("mousemove", function (e) {
    pentagon.mouseMove(e);
  });
  canvas.addEventListener("mouseup", function(e) {  
    pentagon.mouseUp(e);
  });
  function encastre(){
    for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
      if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
        (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
        (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
        (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
        (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
       this.encastre = true;
     this.posX=drawnFiguresNivelSinDrag[i].posX;
     this.posY=drawnFiguresNivelSinDrag[i].posY;
     drawnFiguresNivelSinDrag[i].arrastrar=false;
   }
 }


}
Pentagon.prototype.draw =  function (){
  ctx.fillStyle = this.color;
  let sideMulti = this.side*2;
  let sideDiv = this.side/2;
  ctx.beginPath();
  ctx.moveTo(this.posX, this.posY);
  ctx.lineTo(this.posX + this.side , this.posY + this.side);
  ctx.lineTo(this.posX + sideDiv, this.posY + sideMulti );
  ctx.lineTo(this.posX  ,  this.posY  + sideMulti);
  ctx.lineTo(this.posX -sideDiv , this.posY + sideMulti);
  ctx.lineTo(this.posX - this.side , this.posY + this.side );
  ctx.closePath();
  ctx.stroke();

}


Pentagon.prototype.mouseDown =  function (e){
  var rect = canvas.getBoundingClientRect();
  var cX = e.clientX-rect.left;
  var cY = e.clientY-rect.top;
  var d1 = (this.posX + this.side);
  var d2 = (this.posY + this.side);

  if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
   this.arrastrar = true;
 } 
}


Pentagon.prototype.mouseMove=  function (e){

  if(this.arrastrar){
    var rect = canvas.getBoundingClientRect();
    this.setPos(e.clientX - rect.left, e.clientY - rect.top);
    newCanvas();
  }
  
}

Pentagon.prototype.mouseUp=  function (e){
  this.arrastrar = false;
}

Pentagon.prototype.setPos=  function (posX, posY){
  this.clear();
  this.posX = posX;
  this.posY = posY;
  this.draw();

}

Pentagon.prototype.clear=  function (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.draw();
}

function Parallelogram(paramPosX, paramPosY, paramSideP, color ){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.sideP = paramSideP;
  this.color = color;
  let parallelogram = this;
  this.tipo = 8;
  this.encastre = false;
  canvas.addEventListener("mousedown", function (e) {
    parallelogram.mouseDown(e);
  });
  canvas.addEventListener("mousemove", function (e) {
    parallelogram.mouseMove(e);
  });
  canvas.addEventListener("mouseup", function(e) {  
    parallelogram.mouseUp(e);
  });
  function encastre(){
    for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
      if((this.posX >= (drawnFiguresNivelSinDrag[i].posX)-10)&&
        (this.posX <= (drawnFiguresNivelSinDrag[i].posX)+10) && 
        (this.posY >= (drawnFiguresNivelSinDrag[i].posY)-10)&&
        (this.posY <= (drawnFiguresNivelSinDrag[i].posY)+10)&&
        (this.tipo == (drawnFiguresNivelSinDrag[i].tipo)));
        this.encastre = true;
      this.posX=drawnFiguresNivelSinDrag[i].posX;
      this.posY=drawnFiguresNivelSinDrag[i].posY;
      drawnFiguresNivelSinDrag[i].arrastrar=false;
    }
  }


}
Parallelogram.prototype.draw =  function (){
  ctx.fillStyle = this.color;
  let sideMulti = this.sideP*2;
  let sideDiv = this.sideP/2;
  ctx.beginPath();
  ctx.moveTo(this.posX, this.posY);
  ctx.lineTo(this.posX + sideMulti , this.posY);
  ctx.lineTo(this.posX +this.sideP, this.posY + sideMulti );
  ctx.lineTo(this.posX,  this.posY  + sideMulti);
  ctx.lineTo(this.posX - sideDiv*2, this.posY + sideMulti);
  ctx.closePath();
  ctx.stroke();

}

Parallelogram.prototype.mouseDown =  function (e){
  var rect = canvas.getBoundingClientRect();
  var cX = e.clientX-rect.left;
  var cY = e.clientY-rect.top;
  var d1 = (this.posX + this.sideP);
  var d2 = (this.posY + this.sideP);

  if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
   this.arrastrar = true;
 } 
}


Parallelogram.prototype.mouseMove=  function (e){

  if(this.arrastrar){
    var rect = canvas.getBoundingClientRect();
    this.setPos(e.clientX - rect.left, e.clientY - rect.top);
    newCanvas();

  }
}



Parallelogram.prototype.mouseUp=  function (e){
  this.arrastrar = false;
}

Parallelogram.prototype.setPos=  function (posX, posY){
  this.clear();
  this.posX = posX;
  this.posY = posY;
  this.draw();

}

Parallelogram.prototype.clear=  function (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.draw();
}


function newCanvas(){
 ctx.fillStyle = "#FFFF00";
 ctx.fillRect(0, 0, canvas.width, canvas.height);
 
 for (var i = 0; i < drawnFiguresNivel2.length; i++) {
  drawnFiguresNivel2[i].draw(); 
}
for (var i = 0; i < drawnFiguresNivelSinDrag.length; i++) {
  drawnFiguresNivelSinDrag[i].draw();    
}


}


