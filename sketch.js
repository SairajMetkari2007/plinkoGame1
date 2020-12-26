const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
//arrayss
var plinkos = [];
var particles = [];
var divisions = [];


function setup() {

createCanvas(700,700);
engine = Engine.create();
world = engine.world;

ground = new Ground(width/2,height,width,20);
///loops for partical
for(var d =0;d<=width;d = d+80){
  divisions.push(new Divisions(d,700,10,600));
  
}  

for (var j = -10; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 20; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = -10; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}


console.log(frameCount);


Engine.run(engine);
}

function draw() {
  background(0);
  ground.display();
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();

  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }
  

  
 // drawSprites();
                                                                        
}