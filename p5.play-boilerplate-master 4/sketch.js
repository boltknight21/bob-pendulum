const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bob;
var wood;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground= new ground(800,790,100,5);
  bob= new bob(800,200,10,10);
   wood= new wood(700,350,25,10);
   
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();
  wood.display();
  bob.display(); 
  drawSprites();
}