var cars = [];

function setup() {
  // put setup code here
  createCanvas(800, 800);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background(45, 255, 0);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
  }
}

//our car class
function Car() {
  //attributes
  this.x = random(width);
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods

  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;


  }

}
