var myState = 0 ;
function setup() {
  createCanvas(800,800);
}

function draw() {
  console.log("hello") ;
  switch(myState){
    case 0:
    background(255,0,0) ;
    break ;

    case 1:
    background(0,255,0) ;
    break ;

    case 2:
    background(0,0,255) ;
    break ;
  }
}
function mouseReleased(){
  myState++ ;
  if (myState > 2) {
    myState = 0 ;
  }
}
