let canvasWidth = 512;
let canvasHeight = 512;

let rectangulos = [
  {
  x: canvasWidth/2,
  y: canvasHeight/2,
  velocidadX: -4,
  velocidadY: 2,
  dimensionX: 32,
  dimensionY: 32
  }
];

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  //noLoop();
}

function draw() {
  background(64);
  noStroke();

  rectangulos[0].x += rectangulos[0].velocidadX;
  rectangulos[0].y += rectangulos[0].velocidadY;
  rect(
    rectangulos[0].x,
    rectangulos[0].y,
    rectangulos[0].dimensionX,
    rectangulos[0].dimensionY);

  if(rectangulos[0].x <= 0){
    rectangulos[0].x = 0;
    rectangulos[0].velocidadX *= -1;
  }
  if(rectangulos[0].x >= canvasWidth-rectangulos[0].dimensionX){
    rectangulos[0].x = canvasWidth-rectangulos[0].dimensionX;
    rectangulos[0].velocidadX *= -1;
  }
    if(rectangulos[0].y <= 0){
      rectangulos[0].y = 0;
    rectangulos[0].velocidadY *= -1;
  }
  if(rectangulos[0].y >= canvasHeight-rectangulos[0].dimensionY){
    rectangulos[0].y = canvasHeight-rectangulos[0].dimensionY;
    rectangulos[0].velocidadY *= -1;
  }
}
