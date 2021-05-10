
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var bob,chain,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//bob1 = new Bob (100,500,40);
      roof = new Roof (400,100,700,20);
      bobObject1 = new  Bob (200,400,97);
	  bobObject2 = new  Bob (300,400,97);
	  bobObject3 = new  Bob (400,400,97);
	  bobObject4 = new  Bob (500,400,97);
	  bobObject5 = new  Bob (600,400,97);
    rope1 = new Rope (bobObject1.body,roof.body,-bobDiameter*2,0);
    rope2 = new rope (bobObject2.body,roof.body,-bobDiameter*2,0);
    rope3 = new rope (bobObject3.body,roof.body,-bobDiameter*2,0);
    rope4 = new rope (bobObject4.body,roof.body,-bobDiameter*2,0);
    rope5 = new rope (bobObject5.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(225);
 // Bob1.diplay();
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



