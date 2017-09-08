     let canvas = document.getElementById("canvas");
     let ctx = canvas.getContext("2d"); 
     function Square(paramPosX, paramPosY, paramX, paramY){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.xW = paramX;
            this.yH = paramY;
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

        }
        Square.prototype.drawSquare =  function (){
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.fillRect(this.posX, this.posY, this.xW, this.yH);
            ctx.lineWidth = 5;
            ctx.lineCap ="round";
            ctx.strokeRect (this.posX, this.posY, this.xW, this.yH);
            ctx.closePath();
        }

       Square.prototype.mouseDown =  function (e){
        //dentro del Element del document
        var rect = canvas.getBoundingClientRect();
        var cX = e.clientX-rect.left;
        var cY = e.clientY-rect.top;
        var d1 = (this.posX + this.xW);
        var d2 = (this.posY + this.yH);

        //dentro de la pantalla
        if ((cX >= this.posX) && (cX <= d1)&&(cY >= this.posY) && (cY <= d2)){
           this.arrastrar = true;
        } 
        }
         

         Square.prototype.mouseMove=  function (e){

            if(this.arrastrar){
              var rect = canvas.getBoundingClientRect();
              this.setPos(e.clientX - rect.left, e.clientY - rect.top);
            }
          }

          Square.prototype.mouseUp=  function (e){
            this.arrastrar = false;
          }

            Square.prototype.setPos=  function (posX, posY){
            this.clear();
            this.posX = posX;
            this.posY = posY;
            this.drawSquare();

          }

          Square.prototype.clear=  function (){
                    ctx.clearRect(0,0, canvas.width, canvas.height);
                    this.drawSquare();
          }


           function Circle(paramPosX, paramPosY, paramRadio){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.radio = paramRadio;
            let circulo = this;
            canvas.addEventListener("mousedown", function (e) {
                circulo.mouseDown(e);
            });
            canvas.addEventListener("mousemove", function (e) {
                circulo.mouseMove(e);
            });
            canvas.addEventListener("mouseup", function(e) {  
            circulo.mouseUp(e);
            });
        }
        Circle.prototype.drawCircle =  function (){
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, this.radio , 0, Math.PI*2);
            ctx.lineWidth = 5;
            ctx.lineCap ="round";
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
        }

        Circle.prototype.mouseDown =  function (e){
        //dentro del Element del document
        var cX = e.clientX;
        var cY = e.clientY;
        var d1= Math.sqrt(Math.pow(cX-this.posX,2)+Math.pow(cY-this.posY,2));
        //dentro de la pantalla
        if(d1 < this.radio){
            this.arrastrar = true;
        } 
        
        var sX = e.screenX;
        var sY = e.screenY;
        }

         Circle.prototype.mouseMove=  function (e){

            if(this.arrastrar){
              var rect = canvas.getBoundingClientRect();
              this.setPos(e.clientX - rect.left, e.clientY - rect.top);
            }
          }

          Circle.prototype.mouseUp=  function (e){
            this.arrastrar = false;
          }

            Circle.prototype.setPos=  function (posX, posY){
            this.clear();
            this.posX = posX;
            this.posY = posY;
            this.drawCircle();

          }

          Circle.prototype.clear=  function (){
          ctx.clearRect(0,0, canvas.width, canvas.height);
          this.drawCircle();
          }

           function Triangle(paramPosX, paramPosY, paramSideT){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.sideT = paramSideT;
            let triangulo = this;
            

        }
        Triangle.prototype.drawTriangle =  function (){
           ctx.beginPath();
           ctx.moveTo(this.posX, this.posY);
           ctx.lineTo(this.posX+this.sideT , this.posY);
           ctx.lineTo(this.posX+(this.sideT/2), this.posY-this.sideT);
           ctx.lineTo(this.posX, this.posY); 
           ctx.closePath();
           ctx.stroke();
        }

         function Rectangle(paramPosX, paramPosY, paramL, paramA){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.heightRectangle = paramL;
            this.widthRectangle = paramA;
            

        }
        Rectangle.prototype.drawRectangle =  function (){
           ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.fillRect(this.posX, this.posY, this.heightRectangle, this.widthRectangle);
            ctx.lineWidth = 5;
            ctx.lineCap ="round";
            ctx.strokeRect (this.posX, this.posY, this.heightRectangle, this.widthRectangle);
            ctx.closePath();
        }

           function Diamond(paramPosX, paramPosY,paramSideD){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.sideD = paramSideD;
            let diamond = this;
            

        }
        Diamond.prototype.drawDiamond =  function (){
           ctx.beginPath();
           ctx.moveTo(this.posX, this.posY);
           ctx.lineTo(this.posX+this.sideD , this.posY+this.sideD);
           ctx.lineTo(this.posX, this.posY+(this.sideD*2));
           ctx.lineTo(this.posX-this.sideD, this.posY+this.sideD);
           ctx.closePath();
           ctx.stroke();
        }

        function Hexagon(paramPosX, paramPosY,  paramSideH ){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.sideH = paramSideH;
            let hexagon = this;
            

        }
        Hexagon.prototype.drawHexagon =  function (){
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
        
      
         function Pentagon(paramPosX, paramPosY, paramSide ){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.side = paramSide;
            let triangulo = this;
            

        }
        Pentagon.prototype.drawPentagon =  function (){
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


         function Parallelogram(paramPosX, paramPosY, paramSideP ){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.sideP = paramSideP;
            let triangulo = this;
            

        }
        Parallelogram.prototype.drawParallelogram =  function (){
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

        parallelogram
        
