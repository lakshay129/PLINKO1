const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine, world;
 var ground1;
 var plinko1=[];
 var division1=[];
 var particle1=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground1=new ground(width/2,height,width,20);

  for (var i=7; i<=width;i=i+67){
    division1.push(new division(i,700,10,180));
  }

  for(var k=30;k<=width;k=k+70){
     plinko1.push(new plinko(k,200))
  }
  
  for(var k=10;k<=width;k=k+70){
    plinko1.push(new plinko(k,300))
 }
 
 for(var k=30;k<=width;k=k+60){
  plinko1.push(new plinko(k,400))
}

for(var k=20;k<=width;k=k+70){
  plinko1.push(new plinko(k,500))
}


}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground1.display();
  
  for (var r=0; r<division1.length;r++){
    division1[r].display();
  }
  for (var r=0; r<plinko1.length;r++){
    plinko1[r].display();
  }
  if(frameCount%60===0){
    particle1.push(new particle(random(50,380),5))
  }

  for(var r=0;r<particle1.length;r++){
    particle1[r].display();
  }
 
}