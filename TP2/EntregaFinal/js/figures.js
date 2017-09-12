        //BUSCAR
        //TEMPORIZADOR
        //HACER CLASES, PARA EL CODIGO REPETIDO
        //HACER LOGICA PARA GANAR (si una figura es igual o aprox a otra, mando un
          //  true, ver como mandar los true, y como se que figura hace eso, si esta
          //todo en true llamo al panel de ganaste)
        //BUSCAR PANELS DE GANASTE EN EL JUEGO
        //DIVIDIR EN NIVELES
        //IMAGENES EN CADA FIGURA

        //ARREGLAR ERRORES--------------------
        // ARRASTRAR EL TRIANGULO
        //QUE ANDEN LOS COLORES EN LAS FIGURAS
        //QUE NO SE VAYA EL AMARILLO CUANDO DEJO UNA FIGURA EN OTRO LUGAR
            
       /* let drawnFiguresNivel1 = []; 
        drawnFiguresNivel1.push(new Square (510, 20, 80, 80, "#FFFFFF"));
        drawnFiguresNivel1.push(new Circle(700, 60, 40, "#FFFFFF"));
        drawnFiguresNivel1.push(new Circle(840, 200, 40, "#FFFFFF"));
        drawnFiguresNivel1.push(new Triangle(500, 235, 80,80,  "#FFFFFF"));
        drawnFiguresNivel1.push(new Triangle(800, 100, 80, 80, "#FFFFFF"));
        drawnFiguresNivel1.push(new Rectangle(640, 160, 130, 75, "#FFFFFF"));
        
        //FIGURAS A ELEGIR Y ARRASTABLES
        drawnFiguresNivel1.push(new Square (60, 120, 80, 80, '#FE2E2E'));
        drawnFiguresNivel1.push(new Circle(100, 60, 40, "#FE2E2E"));
        drawnFiguresNivel1.push(new Triangle(60, 300, 80, 80, "#F7FE2E"));
        drawnFiguresNivel1.push(new Rectangle(40, 330, 130, 75, "#2E64FE"));
      
        for (var i = 0; i < drawnFiguresNivel1.length; i++) {
            drawnFiguresNivel1[i].draw();    
         }
         */

        //Nivel 2 - 9 piezas
        
        let drawnFiguresNivel2 = []; 
        drawnFiguresNivel2.push(new Square (800, 280, 80, 80, "#FFFFFF"));
        drawnFiguresNivel2.push(new Square (510, 20, 80, 80, "#FFFFFF"));
        drawnFiguresNivel2.push(new Circle(700, 60, 40, "#FFFFFF"));
        drawnFiguresNivel2.push(new Circle(840, 200, 40, "#FFFFFF"));
        drawnFiguresNivel2.push(new Triangle(500, 235, 80, "#FFFFFF"));
        drawnFiguresNivel2.push(new Triangle(800, 100, 80, "#FFFFFF"));
        drawnFiguresNivel2.push(new Rectangle(640, 160, 130, 75, "#FFFFFF"));
        drawnFiguresNivel2.push(new Diamond(700, 260,  60, "#FFFFFF"));
        drawnFiguresNivel2.push(new Parallelogram (510, 280, 45, "#FFFFFF"));
        //FIGURAS A ELEGIR Y ARRASTABLES
        //en esta parte dibujar la misma la cantidad que la anterior, pero encima
        drawnFiguresNivel2.push(new Square (60, 130, 80, 80, '#FE2E2E'));
        drawnFiguresNivel2.push(new Circle(100, 60, 40, "#00FF80"));
        drawnFiguresNivel2.push(new Triangle(60, 350, 85, "#F7FE2E"));
        drawnFiguresNivel2.push(new Rectangle(200, 130, 130, 75, "#2E64FE"));
        drawnFiguresNivel2.push(new Diamond(250, 250,  55,"#FE2E2E"));
        drawnFiguresNivel2.push(new Parallelogram (250, 20, 40,"#FE2E2E"));

      
        for (var i = 0; i < drawnFiguresNivel2.length; i++) {
            drawnFiguresNivel2[i].draw();    
         }




/*
         //Nivel 3 - 12 piezas
        //3 cudrados, 2 circulos, un pentagono, un hexagono, un rectangulo, rombo, 
        //2 paralelogramos, un triangulo

        let drawnFiguresNivel3 = []; 
        drawnFiguresNivel3.push(new Square (510, 20, 80, 80, "#FFFFFF"));
        drawnFiguresNivel3.push(new Square (510, 20, 80, 80, "#FFFFFF"));
        drawnFiguresNivel3.push(new Square (510, 20, 80, 80, "#FFFFFF"));
        drawnFiguresNivel3.push(new Circle(700, 60, 40, "#FFFFFF"));
        drawnFiguresNivel3.push(new Circle(840, 200, 40, "#FFFFFF"));
        drawnFiguresNivel3.push(new Triangle(500, 235, 80, "#FFFFFF"));
        drawnFiguresNivel3.push(new Rectangle(640, 160, 130, 75, "#FFFFFF"));
        drawnFiguresNivel3.push(new Diamond(200, 300,  110, "#FFFFFF"));
        drawnFiguresNivel3.push(new Parallelogram (440, 630, 80, "#FFFFFF"));
        drawnFiguresNivel3.push(new Parallelogram (440, 630, 80, "#FFFFFF", "#FFFFFF"));
        drawnFiguresNivel1.push(new Pentagon(200, 600, 100, "#FFFFFF"));
        drawnFiguresNivel1.push(new Hexagon(680, 300,  100, "#FFFFFF"));
        //FIGURAS A ELEGIR Y ARRASTABLES

        drawnFiguresNivel3.push(new Square (60, 120, 80, 80, '#FE2E2E'));
        drawnFiguresNivel3.push(new Circle(100, 60, 40, "#00FF80"));
        drawnFiguresNivel3.push(new Triangle(60, 300, 80, "#F7FE2E"));
        drawnFiguresNivel3.push(new Rectangle(40, 330, 130, 75, "#2E64FE"));
        drawnFiguresNivel3.push(new Diamond(200, 300,  110));
        drawnFiguresNivel3.push(new Parallelogram (440, 630, 80));
        drawnFiguresNivel1.push(new Pentagon(200, 600, 100));
        drawnFiguresNivel1.push(new Hexagon(680, 300,  100));

      
        for (var i = 0; i < drawnFiguresNivel3.length; i++) {
            drawnFiguresNivel3[i].draw();    
         }


*/

/*

        //Nivel 4 - 16 piezas
        //3 circulos, 3 triangulos, 2 rombos, un cuadrado, 2 paralelogramos, 2 rectangulos
        //un pentagono, 2 hexagonos 
    
         let drawnFiguresNivel4 = []; 
        drawnFiguresNivel4.push(new Square (510, 20, 80, 80, "#FFFFFF"));
        drawnFiguresNivel4.push(new Circle(700, 60, 40, "#FFFFFF"));
        drawnFiguresNivel4.push(new Circle(840, 200, 40, "#FFFFFF"));
        drawnFiguresNivel4.push(new Circle(840, 200, 40, "#FFFFFF"));
        drawnFiguresNivel4.push(new Triangle(500, 235, 80, "#FFFFFF"));
        drawnFiguresNivel4.push(new Triangle(500, 235, 80, "#FFFFFF"));
        drawnFiguresNivel4.push(new Triangle(500, 235, 80, "#FFFFFF"));
        drawnFiguresNivel4.push(new Rectangle(640, 160, 130, 75, "#FFFFFF"));
        drawnFiguresNivel4.push(new Rectangle(640, 160, 130, 75, "#FFFFFF"));
        drawnFiguresNivel4.push(new Diamond(200, 300,  110, "#FFFFFF"));
        drawnFiguresNivel4.push(new Diamond(200, 300,  110, "#FFFFFF"));
        drawnFiguresNivel4.push(new Parallelogram (440, 630, 80, "#FFFFFF"));
        drawnFiguresNivel4.push(new Parallelogram (440, 630, 80, "#FFFFFF"));
        drawnFiguresNivel4.push(new Pentagon(200, 600, 100, "#FFFFFF"));
        drawnFiguresNivel4.push(new Hexagon(680, 300,  100, "#FFFFFF"));
        drawnFiguresNivel4.push(new Hexagon(680, 300,  100, "#FFFFFF"));
        //FIGURAS A ELEGIR Y ARRASTABLES

        drawnFiguresNivel4.push(new Square (60, 120, 80, 80, '#FE2E2E'));
        drawnFiguresNivel4.push(new Circle(100, 60, 40, "#00FF80"));
        drawnFiguresNivel4.push(new Triangle(60, 300, 80, "#F7FE2E"));
        drawnFiguresNivel4.push(new Rectangle(40, 330, 130, 75, "#2E64FE"));
        drawnFiguresNivel4.push(new Diamond(200, 300,  110));
        drawnFiguresNivel4.push(new Parallelogram (440, 630, 80));
        drawnFiguresNivel4.push(new Pentagon(200, 600, 100));
        drawnFiguresNivel4.push(new Hexagon(680, 300,  100));

      
        for (var i = 0; i < drawnFiguresNivel4.length; i++) {
            drawnFiguresNivel4[i].draw();    
         }
*/





        /*var Square1 = new Square(120, 50, 150, 150);
        Square1.drawSquare();

        var Circle1 = new Circle(450, 130, 80);
        Circle1.drawCircle();

        var Triangle1 = new Triangle (350, 500, 200); 
        Triangle1.drawTriangle();

        var Rectangle1 = new Rectangle(600, 50, 260, 150);
        Rectangle1.drawRectangle();

        var Diamond1 = new Diamond(200, 300,  110);
        Diamond1.drawDiamond();

        var Pentago1 = new Pentagon(200, 600, 100); 
        Pentago1.drawPentagon();

        var Hexagon1 = new Hexagon(680, 300,  100); 
        Hexagon1.drawHexagon();

        var Parallelogram1 = new Parallelogram (440, 630, 80);
        Parallelogram1.drawParallelogram();


        */


       
    