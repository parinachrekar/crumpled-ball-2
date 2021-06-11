
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 670, width, 15 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
   dustbin = new Dustbin();
   paper  = new Paper();
}


function draw() {
  rectMode(CENTER);
  background(255);
 
    rect(ground.position.x,ground.position.y,width,10);
  drawSprites();
 dustbin.display();
 paper.display();
}



