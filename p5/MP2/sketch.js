var mic;
var vol;
var y = 0;
var myTimer = 0
var myState = 0;
var img1;
var img2;
var img3;
var img4;
var img5;

function preload(){
  img1 = loadImage("assets/pic3.jpg")
}

function setup() {
  createCanvas(1920, 1080);
  img1 = loadImage("assets/pic3.jpg")
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  console.log("hello");
  switch (myState) {
    case 0:
      background(100);

      ellipse(200, y, 100, 100);
      vol = mic.getLevel(); // level is between 0 and 1
      vol = vol * 100; // you may need to change this

      if (vol >= 3) {
        y++;
      }
      if (y > 1080) {
        background(255, 0, 0);
      }

      textSize(18);
      text("Www ur volume must not be <3 ----- " + vol, 80, 400);
      fill(25,255,45);
      myTimer++ ;
      if (myTimer >=200) {
        myTimer = 0 ;
        myState = 1;
      }
      break;

    case 1:
      background(0, 255, 0)
      textSize(24);
      image(img1, 50,50);
      text(" 'green' screens", 200, 500)
      break;

    case 2:
      background(0, 255, 100)
      textSize(36)
      break;

    case 3:
      background(100, 255, 0)
      break;

    case 4:
      background(100, 255, 100)
      break;
  }
}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  myState++;
  if (myState > 4) {
    myState = 0;
  }
}
