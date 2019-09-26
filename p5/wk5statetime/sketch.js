var myState = 0;
var myTimer = 0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {

  switch(myState){
    case 0:
    background("white")
    text("case 0", 100, 200);
    myTimer++ ;
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 1;
    }
    break;

    case 1:
    background("white")
    myTimer++
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 2;
    }
    text("case 1", 100, 200);
    break;

    case 2:
    background("white")
    myTimer++
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 0;
    }
    text("case 2", 100, 200);
    break;
  }
}
