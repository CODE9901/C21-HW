
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundobj,leftside,rightside,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundobj=new ground(width/2,670,width,20)
leftside=new ground(1100,600,20,120)
rightside=new ground(1350,600,20,120)
var options={
	restitution:0.3,
	friction:0,
	density:1.2

}
ball=Bodies.circle(260,100,20,options)
World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display()
  leftside.display()
  rightside.display()
 ellipse(ball.position.x, ball.position.y,40,40)
 
}

function keyPressed(){

if(keyCode==UP_ARROW)	{
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})	
}
}

