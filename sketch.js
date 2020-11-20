function setup() {
  createCanvas(400,400);
  moving=createSprite(200, 200, 50, 50);
  moving.shapeColor="blue";
  moving.debug=true;
  moving.velocityY=-1;

fixed = createSprite(100,200,50,50);
fixed.debug=true;
fixed.shapeColor="blue";
fixed.velocityX=3;

obj1 = createSprite(100,50,100,20);
obj1.shapeColor="cyan";
obj1.debug=true;
obj1.velocityX=1;

obj2=createSprite(200,50,50,50);
obj2.shapeColor="yellow";
obj2.debug=true;
obj2.velocityY= 1;

obj3 = createSprite(300,50,50,80);
obj3.shapeColor="orange"
obj3.debug=true;
obj3.velocityX=-1;
}

function draw() {
  background("pink"); 
   //moving.x=World.mouseX;
  // moving.y=World.mouseY;

   //console.log(moving.x-fixed.x);

   if(isTouching(moving,obj2)){
    moving.shapeColor="red";
    obj2.shapeColor="red";
    bounceOff(moving,obj2);
   }
  

  drawSprites();
}
