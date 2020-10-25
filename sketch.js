var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(80, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0); 

if(hasCollided(bullet,wall)) {
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10) {
    wall.shapeColor = "red";
  }
   else if (damage<10) {
     wall.shapeColor = "green";
   }

  }

  drawSprites();
}

function hasCollided(Lbullet,Lwall) {
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
   if(bulletRightEdge >=wallLeftEdge) 
   {
     return true;
   }
   return false;
}