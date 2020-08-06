const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
const Render=Matter.Render;

var engine, world;
//var red1,red2,red3;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(400,670,800,10);
    ground2 = new Ground(750,630,20,100);
paper= new Paper(100,350,20);

red1= createSprite(650,670,200,20);

	red2= createSprite(750,630,20,100);
	red3= createSprite(550,630,20,100);
   Engine.run(engine) ;
}
function draw(){
  
    background("white");
    Engine.update(engine);
    ground1.display();
    paper.display();
  red1.shapeColor="red";
    red2.shapeColor="red";
    red3.shapeColor="red";
    drawSprites();
   
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
    }
}
