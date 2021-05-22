
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var boy,boyimg;

function preload()
{
boyimg=loadImage("sprites/boy.png")	;
}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	boy = createSprite(200,550);
	boy.addImage(boyimg);
    boy.scale=0.1;

	//Create the Bodies Here.
    stone1= new Stone(300,500,30);
  tree1= new Tree(600,350);
	mango1 = new Mangoes(900,250,15);
	mango2 = new Mangoes(800,200,15);
	mango3 = new Mangoes(800,280,15);
	mango4 = new Mangoes(1000,250,15);
	mango5 = new Mangoes(670,300,15);

 SlingShot= new Elastic(stone1.body,{x:150,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  
tree1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
stone1.display();
detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

SlingShot.display();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.mangoes.position;
	stoneBodyPosition=lstone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}




function mouseDragged() {
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    SlingShot.fly();
}
