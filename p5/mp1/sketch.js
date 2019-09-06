function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //createCanvas(800, 800) ;
}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    // the pressed down state
    ellipse(width / 2, height / 2, 50, 50);
    ellipse(width / 2, height / 2 - 50, 50, 50);
    rect(width / 3, height / 3, 50, 50);
    rect(width / 3+25, height / 3+25, 50, 50);
    fill(255);
    triangle(200,100,200,200,100,200);
    triangle(750,700,200,200,750,200);
    fill(50,0,255)
    rect(240,180,300,200);


  } else {
    // the not-pressed state
    rect(width / 2, height / 2, 50, 50);
    rect(width / 2+25, height / 2+25, 50, 50);
    triangle(200,100,200,200,100,200);
    ellipse(750,86,50,50);
    fill(0,180,80);
    rect(480,300,100,80);
    rect(680,110,110,90);
  }

  fill(255);
  text(mouseX + "T. Augman (120bpm)" + mouseY, 20, 20);

}



function mouseReleased() {
  console.log(mouseX + ',' + mouseY);
}
