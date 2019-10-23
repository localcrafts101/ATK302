var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird;
var birds = [];
var img1;
var img2;
let y = 0

function setup() {

  createCanvas(1920, 1080);

  birds[0] = loadImage("assets/firewalkcomp.png");
  birds[1] = loadImage("assets/ctnat1.png");
  birds[2] = loadImage("assets/thing2.png");

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  yodaRight = loadImage("assets/thing1.png");
  yodaLeft = loadImage("assets/thing3.png");
  yoda = yodaRight;

  bird = loadImage("assets/bird1.png");

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0: // splash screen
      // welcome to my game, click to start
      background(0,45,255);
      fill('white');
      text("welcome to my game! click!", 100, 100);
      text("YAY", 100, 200);
      break;

    case 1: // the game state
      game();
      timer++;
      if (timer > 900) {
        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      background(45,255,255);
      loadImage('assets/page1.jpg', img1 => {
    image(img1, 150, 200);
  });
      fill('white');
      text("YOU WON!!!", 100, 100);
      break;

    case 3: // the lose state
      background('blue');
      loadImage('assets/page2.jpg', img2 => {
    image(img2, 150, 200);
  });
      fill('white');
      text("You LOST!", 100, 100);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: // the win state!
      resetTheGame();
      myState = 0;
      break;

    case 3: // the lose myState
      resetTheGame();
      myState = 0;
      break;

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
  this.birdNum = floor(random(birds.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30); // use this for timer code


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //    rect(this.pos.x, this.pos.y, 100, 50);
    //    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    //    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //  image(bird, this.pos.x, this.pos.y, 100, 100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0;
    }



  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 36.4621596072;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 36.4621596072;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 36.4621596072;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 36.4621596072;

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;

}


function game() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // make sure car isn't really close to frog!!!!
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);  // take the car out!!
      // if the car's type is a killer type, myState = 3
    }
  }

  if (cars.length == 0) {
    myState = 2;
  }

  // draw the frog
  fill('green');
  //  ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();
}
