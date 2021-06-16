const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberBall;
var ironBall;
var stoneball;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubberBall = new Rubber(200, 500, 100);
    ironBall = new Iron(400, 500, 200);
    stoneBall = new Stone(600, 500, 150);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stoneBall.display();
    ironBall.display();
    rubberBall.display();


    
 
}