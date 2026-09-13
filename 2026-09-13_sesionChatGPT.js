function setup() {
  createCanvas(800, 500);
  noLoop(); // stops draw from executing more than one time
}

function draw() {
  background(64);

  fill(0, 0, 255);
  noStroke();

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++){
      fill(
        255 - x * 50, 
        255 - y * 50, 
        random(0,255)
      );
      circle(
        50 + x * 50,
        50 + y * 50,
        random(10,50)
      );
      
    }
  }
}