
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree
var stone
var ground
var boy,boyImg

function preload()
{
	boyImg=loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);
	createSprite()

	boy=createSprite(100,650,10,10)
	boy.addImage(boyImg)
	boy.scale=0.1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(150,175,10)
	tree=new Tree(620,480,450,450)
	ground=new Ground(800,500,700,10,)
	mango1=new Mango(600,100,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245);

  stone.display();
  tree.display();
  ground.display();
  mango1.display();

  drawSprites();
 
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}

function mouseDragged(){

}

function mouseReleased(){

}