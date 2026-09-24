let canvasWidth = 512;
let canvasHeight = 512;

let rectangulos = [];

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  //noLoop();
  for(let i=0; i < 50; i++){
  
    let nuevoRectangulo = {
      x: random(0, canvasWidth),
      y: random(0, canvasHeight),
      velocidadX: random(-3,3),
      velocidadY: random(-3,3),
      dimensionX: 32,
      dimensionY: 32
    };
    rectangulos.push(nuevoRectangulo);
  }
}

function draw() {
  background(64);
  noStroke();
for (let i = 0; i < rectangulos.length; i++){
  rectangulos[i].x += rectangulos[i].velocidadX;
  rectangulos[i].y += rectangulos[i].velocidadY;
  rect(
    rectangulos[i].x,
    rectangulos[i].y,
    rectangulos[i].dimensionX,
    rectangulos[i].dimensionY)

  if(rectangulos[i].x <= 0){
    rectangulos[i].x = 0;
    rectangulos[i].velocidadX *= -1;
  }
  if(rectangulos[i].x >= canvasWidth-rectangulos[i].dimensionX){
    rectangulos[i].x = canvasWidth-rectangulos[i].dimensionX;
    rectangulos[i].velocidadX *= -1;
  }
    if(rectangulos[i].y <= 0){
      rectangulos[i].y = 0;
    rectangulos[i].velocidadY *= -1;
  }
  if(rectangulos[i].y >= canvasHeight-rectangulos[i].dimensionY){
    rectangulos[i].y = canvasHeight-rectangulos[i].dimensionY;
    rectangulos[i].velocidadY *= -1;
  }
}
}
