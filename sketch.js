
var container1,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ball=new Ball(200,100,10)
	container1= new Container(600,650,70,90)

    ground=new Ground(400,height,800,20)
    launcher = new Launcher(ball.body,{x:133, y:87.5});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  container1.display();
 
   ground.display();
   launcher.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}





