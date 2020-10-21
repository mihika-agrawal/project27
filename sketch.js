
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope3,rope3,rope4,rope5;

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof= new Roof(700,30);

	bob1= new Ball(500,500);
	bob2= new Ball(300,500);
	bob3= new Ball(400,500);
	bob4= new Ball(700,500);
	bob5= new Ball(600,500);

	rope1= new Rope(bob1.body,roof.body,500,20);
	rope2= new Rope(bob2.body,roof.body,300,20);
	rope3= new Rope(bob3.body,roof.body,400,20);
	rope4= new Rope(bob4.body,roof.body,700,20);
	rope5= new Rope(bob5.body,roof.body,600,20);

  
  

}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.depth=bob2.depth;
  bob3.depth=bob2.depth;
  bob4.depth=bob2.depth;
  bob5.depth=bob2.depth;
  
  drawSprites();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 bob2.display();
 bob3.display();
 bob1.display();
 bob5.display();
 bob4.display();

 

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-705,y:-700});
	}
}


