var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 ){
   movingRect.shapeColor = "pink";
   fixedRect.shapeColor = "pink";
 }
 else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
 }

  drawSprites();
}
