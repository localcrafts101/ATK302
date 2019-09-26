var pumpkin ;

function setup() {
  // put setup code here
  createCanvas(200,200) ;
}

function draw() {
  background(100) ;
  // put drawing code here
  rect(x, height/2, 10, 10);
  x = x+5 ;

  if (x > width) {
    x = 0;
  }

  //
  x += 5; // x = x + 5

  if (x > 200) {}
}
