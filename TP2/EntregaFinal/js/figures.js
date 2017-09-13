  let drawnFigures = []; 
  let drawnFiguresSinDrag = []; 
  drawnFiguresSinDrag.push(new SquareSinDrag (800, 290, 80, 80));
  drawnFiguresSinDrag.push(new SquareSinDrag (520, 30, 80, 80));
  drawnFiguresSinDrag.push(new CircleSinDrag(700, 80, 40));
  drawnFiguresSinDrag.push(new HexagonSinDrag(540, 150, 55));
  drawnFiguresSinDrag.push(new PentagonSinDrag(840, 20, 55));
  drawnFiguresSinDrag.push(new RectangleSinDrag(640, 160, 130, 75));
  drawnFiguresSinDrag.push(new DiamondSinDrag(710, 260,  60));
  drawnFiguresSinDrag.push(new ParallelogramSinDrag (550, 280, 45));

  for (var i = 0; i < drawnFiguresSinDrag.length; i++) {
    drawnFiguresSinDrag[i].draw();    
}

drawnFigures.push(new Square (210, 40, 80, 80));
drawnFigures.push(new Square (211, 150, 80, 80));
drawnFigures.push(new Circle(110, 330, 40));
drawnFigures.push(new Hexagon(220, 390, 55));
drawnFigures.push(new Pentagon(250, 260, 55));
drawnFigures.push(new Rectangle(40, 40, 130, 75));
drawnFigures.push(new Diamond(110, 140,  60));
drawnFigures.push(new Parallelogram (70, 400, 45));


for (var i = 0; i < drawnFigures.length; i++) {
    drawnFigures[i].draw();    
}




