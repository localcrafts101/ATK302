var myState = 0 ;

function setup() {
  createCanvas(800,800);
}

function draw() {
  switch (myState){
    case 0:
    background(255,0,0) ;
    fill('white');
    textSize(100);
    text("case 0", width / 2, 100);
    break ;

    case 1:
      background(0, 255, 0);
      fill('black');
      textSize(100);
      text("case 1", 100, 100);
      break;

    case 2:
    background(0, 0, 255);
  fill('gold');
  textSize(100);
  text("case 2", 100, 100);
  break ;
}
}

function mouseReleased() {
  myState++;
  if (myState > 2) {
    myState = 0;
  }
}
