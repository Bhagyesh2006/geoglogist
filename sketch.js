const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1;
var rubber;
var stone1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
 iron1 = new iron(300,350);
  rubber = new Rubber(900,450,70);
stone1 = new stone(700,320,100,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

iron1.display();
    plane.display();
    hammer.display();
rubber.display();    
 stone1.display();
}