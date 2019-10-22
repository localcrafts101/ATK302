var cars = [];
var frogPos ;
var myState = 0;
var myTimer = 0;
var yoda, yodaRight, yodaLeft ;
var bird ;

function setup() {

  createCanvas(800, 800);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  yodaRight = loadImage("assets/yodaRight.gif") ;
  yodaLeft = loadImage("assets/yodaLeft.gif") ;
  yoda = yodaRight ;

  bird = loadImage("assets/bird1.png")


  frogPos = createVector(width/2, height-80) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  imageMode(CENTER) ;
}

function draw() {

  switch(myState){
    case 0: //splashscreen
    background(255,0,55)
    myTimer++
  if(myTimer = 200){myTimer = myState = 1
  }

  case 1:
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  }

  // draw the frog
  fill('green') ;
  image(yoda, frogPos.x, frogPos.y) ;
  checkForKeys() ;
}
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    image(bird, this.pos.x, this.pos.y, 150, 150);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed(){
  if(keyCode === LEFT_ARROW) yoda = yodaLeft ;
  if(keyCode === RIGHT_ARROW) yoda = yodaRight ;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}
