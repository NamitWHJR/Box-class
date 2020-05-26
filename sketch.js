const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2
var ground

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(300,380,600,40)

box2 = new Box(220,100,60,60)
    box1 = new Box(200,300,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display()
    ground.display()
   
}