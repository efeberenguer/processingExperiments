let canvasWidth = 256;
let canvasHeight = 256;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);
  line(0,0,mouseX,mouseY);
  line(canvasWidth,0,mouseX,mouseY);
  line(0,canvasHeight,mouseX,mouseY);
  line(canvasWidth,canvasHeight,mouseX,mouseY);
  let midpointX1 = mouseX/2;
  let midpointY1 = mouseY/2;
  let midpointX2 = canvasWidth - (canvasWidth - mouseX)/2;
  let midpointY2 = mouseY/2;
  let midpointX3 = canvasWidth - (canvasWidth - mouseX)/2;
  let midpointY3 = canvasHeight - (canvasHeight - mouseY)/2;
  let midpointX4 = mouseX/2;
  let midpointY4 = canvasHeight - (canvasHeight - mouseY)/2;
  beginShape();
  vertex(midpointX1, midpointY1);
  vertex(midpointX2, midpointY2);
  vertex(midpointX3, midpointY3);
  vertex(midpointX4, midpointY4);
  endShape(CLOSE);
  
}
