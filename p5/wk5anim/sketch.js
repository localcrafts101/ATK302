var x = 0 ;
function setup() {
  createCanvas(200,200) ;
}

function draw() {
  background(100) ;
  text("Hey, Siri", x, 100)  ;
  x++ ;
  if (x > width) {
    x=0
  } ;
}
