var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("entry.jpg");
  bg2 = loadImage("level2.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score,displayWidth/2 , 50);

  if(score === 4) {
    clear()
    background(bg2)
    fill("White")
    textSize(40);
    text("Welcome to next level",displayWidth/2-100, displayHeight);
  }

  drawSprites()
}