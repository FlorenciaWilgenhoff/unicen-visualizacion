let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
function Square(paramPosX, paramPosY, paramX, paramY){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.xW = paramX;
            this.yH = paramY;
            this.arrastrar = false;
            let cuadrado = this;
            canvas.addEventListener("click", function (e) {
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
        } else{
                console.log("Estas fuera del cuadrado");
        }
        }
        Square.prototype.mouseMove =  function (e){
        if (this.arrastrar) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                this.xW = this.cX + delta.x, this.yH = this.cY + delta.y //ver cual seria delta

                drawSquare(this.posX, this.posY,  this.xW, this.yH);
              }
            }
        Square.prototype.mouseUp =  function (e){
        arrastrar = false;
        }
        
         

        var Square1 = new Square(100, 50, 200, 200);
        Square1.drawSquare();