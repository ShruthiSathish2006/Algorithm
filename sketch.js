var moving;
var fixed





function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(100,100,30,50);
  moving.velocityX = 2;
  moving.velocityY = 4;
  fixed.velocityX = 3;
  fixed.velocityY = 5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //moving.x = mouseX;
  //moving.y = mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2
  &&fixed.x-moving.x<moving.width/2+fixed.width/2
  &&moving.y-fixed.y<moving.height/2+fixed.height/2
  &&fixed.y-moving.y<moving.height/2+fixed.height/2){
    moving.shapeColor = "orange"
    fixed.shapeColor = "pink"


  }
}
