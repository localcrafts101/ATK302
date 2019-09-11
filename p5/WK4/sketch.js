var img;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  img = loadImage("assets/IMG_2795.PNG")
}

function draw() {
  // put drawing code here
  image(img, 10, 10);
}
