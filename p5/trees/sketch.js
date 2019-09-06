function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1920, 1080);
  noStroke();
  //colormode() js5

  // fill("ffff00")
  // arc(1200, 100, 160, 80, 0, TAU);
  //
  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(89, 54, 76);
  // rect(0, 0, 100, 200);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI)
  //
  // fill(00,255,00);
  // arc(900, 450, 350, 280, PI, TWO_PI);
}

function draw() {
  background(30,10,255);
  fill("ffff00");
  arc(1200, 100, 160, 80, 0, TAU);

  fill(00,255,00);
  arc(900, 450, 350, 280, PI, TWO_PI);

  rect(856,455,90,240);
fill("red")
circle(300, 300, 80);

fill("purple");
  rect(0,750,1920,1920);

  fill(255);
  text(mouseX+','+mouseY,1200,900);
}
function mouseReleased() {
  console.log(mouseX+','+mouseY);
}
