var bullet;

var wall;

var speed, weight, thickness;

function setup() 
{
createCanvas(1600,400);
bullet = createSprite(50, 200, 50, 16);
bullet.shapeColor = color("white")
wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor = color(80,80,80);
speed = random(223, 321);
weight = random(30, 52);
thickness = random(22, 83);

bullet.velocityX = speed;
}

function draw() 
{
background("black");  


if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10)
{
bullet.shapeColor = color("red");
}

if (damage<10)
{
bullet.shapeColor = color("green");
}

}
drawSprites();
}