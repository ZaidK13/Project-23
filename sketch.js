var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")

    leftWall = createSprite(300,635,20,50);
	leftWall.shapeColor= "red"

	rightWall= createSprite(500,635,20,50);
    rightWall.shapeColor = "red"

	base = createSprite(400,650,200,20);
    base.shapeColor = "red"
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	World.add(world,leftWall);
    World.add(world,rightWall);
	World.add(world,base);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
  if (keyCode === LEFT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x-20; translation={x:-20,y:0} 
	  Matter.Body.translate(packageBody, translation)

  }
  if (keyCode === RIGHT_ARROW) {
helicopterSprite.x=helicopterSprite.x+20; translation={x:+20,y:0} 
	  Matter.Body.translate(packageBody, translation)
  }
  }



