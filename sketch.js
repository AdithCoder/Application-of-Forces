const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var buttonRight, buttonUp;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution:1.2
    
  }

  ball = Bodies.circle(200,200,25,ball_options);
  World.add(world,ball);

  buttonRight = createImg("right.png");
  buttonRight.size(50,50);
  buttonRight.position(325,200);
  buttonRight.mouseClicked(hForce);
  
  buttonUp = createImg("up.png");
  buttonUp.size(50,50);
  buttonUp.position(180,40);
  buttonUp.mouseClicked(vForce);

  


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  fill("lightBlue");
  noStroke();

  ellipse(ball.position.x,ball.position.y,25,25);
  Engine.update(engine);
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.04});
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0});  
}