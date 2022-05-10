let w = 0;

function setup(){
createCanvas(windowWidth, windowHeight);
background(0,90,128);
fill(250);
rect(0,0,width,height*5/6);
frameRate(500);
}


function draw(){
  
  
fill(w);
textSize(width/13);

  
text("A B S C H I C K E N", width*1/6,height*11.5/12);

  
  noStroke();
  fill(0);
  if(mouseIsPressed){
    if(mouseY<height*5/6){
circle(mouseX,mouseY,7);
    }
  }
}

function mouseIsPressed() {
 
  if(mouseY > height*5/6){ 
  w= 230;
  saveCanvas("Zyklop"+day()+","+hour()+":"+minute()+"Uhr"+".jpg");
}
}

function mouseReleased() {
  
  w= 0;
}
