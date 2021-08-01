const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var o1;
var p1;
var b1;

function preload(){
  
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  o1 = new Background(100,100);
  p1 = new Knight(100,50);
  p2 = new Mage(200,50,20,20);
  b1 = new map(200,150,100,20);
  
}

function draw() {
  background("green");  
  Engine.update(engine);
  o1.display();
  p1.display();
  p2.display();
  b1.display();
  
}