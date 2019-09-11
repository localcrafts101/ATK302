var song;

function preload() {
  song = loadSound("assets/yankee.WAV")
}
function setup() {
  // put setup code here
  createCanvas(800, 800);
  background(255,0,0);
  song.play();
}

function draw() {
  // put drawing code here
}
