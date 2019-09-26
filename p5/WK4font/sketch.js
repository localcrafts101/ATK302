var roboto ;
var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800) ;
  roboto = loadFont("assets/Roboto-Black.tff") ;
}

function draw() {
  // put drawing code here
  background(100)
  textFont(roboto, 24) ;
fill(255,0,0) ;
  text("hello world", x,50) ;
  x++ ;
  if (x > width) {
    x = 0 ;
  }
}
