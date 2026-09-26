p5.disableFriendlyErrors = true;

function setup() {
  createCanvas(200, 200);

  pixelDensity(1);
  loadPixels();

  for (let x = 0; x < width; x++){

    for (let y = 0; y < height; y++){

      let index = 4 * (x + y * width);

      let azulClaro = [80, 190, 220];
      let azulOscuro = [20, 100, 180];

      let colour;

      let probabilidadOscuro = map(
        y,
        0,
        height,
        0.1,
        0.9
      );

      if (random(1) < probabilidadOscuro){
        colour = azulOscuro;
      } else {
        colour = azulClaro;
      }

      pixels[index]     = colour[0];  // R
      pixels[index + 1] = colour[1]; // G
      pixels[index + 2] = colour[2]; // B
      pixels[index + 3] = 255; // Alpha
    }
  }

  updatePixels();
}
