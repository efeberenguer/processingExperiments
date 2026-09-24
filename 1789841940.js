let canvasWidth = 512;
let canvasHeight = 512;
let velocidadX = 2;
let velocidadY = 3;
let diametro = 2;
let radio = diametro / 2;
let x = 0 + radio;
let y = 0 + radio;



function setup() {
  createCanvas(canvasWidth, canvasHeight);  
}

function draw() {
  background(220);

  x = x + velocidadX;
  y = y + velocidadY;

  if(x >= canvasWidth - radio){
    velocidadX *= -1;
    radio = radio *2;
  }
  if(x <= 0 + radio){
    velocidadX *= -1;
    radio = radio *2;
  }

  if(y >= canvasWidth - radio){
    velocidadY *= -1;
    radio = radio *2;
  }
  if(y <= 0 + radio){
    velocidadY *= -1;
    radio = radio *2;
  }
  /*
  line(x, 0, x, canvasHeight);
  line(0, y, canvasWidth, y);
  */
  circle(
    x,
    y,
    radio*2
  );
}
