// Este código se ha desarollado con ChatGPT

let x = 128;
let y = 128;
let velocidadX = -2;
let velocidadY = -2;
let diametro = 32;
//let velocidadOpuesta = velocidad * -1;

function setup() {
  createCanvas(512, 256);
}

function draw() {
  background(64, 20);

  fill(0,0,255);
  //stroke(0);
  noStroke();
  circle(x, y, diametro);

  x = x + velocidadX;
  y = y + velocidadY;

  if (x > width - (diametro/2)) {
    x = width - (diametro/2)
    velocidadX = velocidadX*(-1);
  }

  if (x < diametro/2) {
    x = diametro/2
  velocidadX = velocidadX*(-1);
  }

  if (y > height - (diametro/2)) {
    y = height - (diametro/2)
    velocidadY = velocidadY*(-1);
  }

  if (y < diametro/2) {
    y = diametro/2
  velocidadY = velocidadY*(-1);
  }
}

