var x

function setup() {
  // put setup code here
  background(255) ;
  createCanvas(1536,1920) ;
}

function draw() {
  fill('15317E') ;
  rect(100, 100, 100, 100);

  fill('AA00EE');
  rect(200, 100, 100, 100);

  fill('0000A0');
  rect(300,100,100,100);
}
function mouseReleased(){

if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200))
  console.log("beep") ;
}
