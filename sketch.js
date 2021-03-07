
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roofObject, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	bac = loadImage("giphy.gif")
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(400,400);
	bob2 = new Bob(450,400);
	bob3 = new Bob(500,400);
	bob4 = new Bob(350,400);
	bob5 = new Bob(200,370);
  roofObject = new Roof(400,200,550,30); 
  rope1 = new Rope(bob1.body, roofObject.body, 0, 0);
  rope2 = new Rope(bob2.body, roofObject.body,50,0);
  rope3 = new Rope(bob3.body, roofObject.body,100, 0);
  rope4 = new Rope(bob4.body, roofObject.body, -50, 0);
  rope5 = new Rope(bob5.body, roofObject.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bac);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 }
 function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob3.body, bob5.body.position,{x:75,y:-75});
   }
 }

