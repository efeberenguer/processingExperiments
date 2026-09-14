let canvasWidth = 512;
let canvasHeight = 512;

let rectangulo = {
  x: canvasWidth/2,
  y: canvasHeight/2,
  velocidadX: -4,
  velocidadY: 2,
  dimensionX: 32,
  dimensionY: 32
};

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  //noLoop();
}

function draw() {
  background(64);
  noStroke();

  rectangulo.x += rectangulo.velocidadX;
  rectangulo.y += rectangulo.velocidadY;
  rect(
    rectangulo.x,
    rectangulo.y,
    rectangulo.dimensionX,
    rectangulo.dimensionY);

  if(rectangulo.x <= 0){
    rectangulo.x = 0;
    rectangulo.velocidadX *= -1
  };
  if(rectangulo.x >= canvasWidth-rectangulo.dimensionX){
    rectangulo.x = canvasWidth-rectangulo.dimensionX;
    rectangulo.velocidadX *= -1
  };
    if(rectangulo.y <= 0){
      rectangulo.y = 0;
    rectangulo.velocidadY *= -1
  };
  if(rectangulo.y >= canvasHeight-rectangulo.dimensionY){
    rectangulo.y = canvasHeight-rectangulo.dimensionY
    rectangulo.velocidadY *= -1
  };
}
