var box
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,40,50)
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 8
  }
  if(keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 8
  }
  if(keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 8
  }
  if(keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 8
  }
  box.bounceOff(edges)
}





