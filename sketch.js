// Code for the Tower siege game
//developed on 10/1/2020
//things used-constrains,and Physics engine


//Predefined JS Libs
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


//Defined Consts used thrroughout the prog
const CanvasHeight = 700;
const CanvasWidth = 1920;
const blockWidth=30;
const blockHeight=40;
const x1stBlockPos=920;
const y1stBlockPos=450;
const y2ndBlockPos=400;
const y3rdBlockPos=350;


//VARIABLES
var hexHitter;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var LaunchConstrain;
var Platform;
var backgroundImg;
var bg = "bg1.png";
var Score=0;


function preload(){
  getBackgroundImg();
  bgImG=loadImage(bg);
}
//CODE
function setup(){
  engine = Engine.create();
   world = engine.world;
  createCanvas(CanvasWidth,CanvasHeight);
  //Grond
  Platform=new Ground(1000,500,300,40);
  //hoxhetter
  hexHitter=new HexHitter(400,450,30);
  //row1
  
  block4=new blocks(x1stBlockPos,y1stBlockPos,blockWidth,blockHeight);
  block2=new blocks(x1stBlockPos+40,y1stBlockPos,blockWidth,blockHeight);
  block1=new blocks(x1stBlockPos+80,y1stBlockPos,blockWidth,blockHeight);
  block3=new blocks(x1stBlockPos+120,y1stBlockPos,blockWidth,blockHeight);
  block5=new blocks(x1stBlockPos+160,y1stBlockPos,blockWidth,blockHeight);
  //row2
  block9=new blocks(x1stBlockPos,y2ndBlockPos,blockWidth,blockHeight);
  block10=new blocks(x1stBlockPos+40,y2ndBlockPos,blockWidth,blockHeight);
  block6=new blocks(x1stBlockPos+80,y2ndBlockPos,blockWidth,blockHeight);
  block7=new blocks(x1stBlockPos+120,y2ndBlockPos,blockWidth,blockHeight);
  block8=new blocks(x1stBlockPos+160,y2ndBlockPos,blockWidth,blockHeight);
  
  //row3
  block14=new blocks(x1stBlockPos,y3rdBlockPos,blockWidth,blockHeight);
  block15=new blocks(x1stBlockPos+40,y3rdBlockPos,blockWidth,blockHeight);
  block11=new blocks(x1stBlockPos+80,y3rdBlockPos,blockWidth,blockHeight);
  block12=new blocks(x1stBlockPos+120,y3rdBlockPos,blockWidth,blockHeight);
  block13=new blocks(x1stBlockPos+160,y3rdBlockPos,blockWidth,blockHeight);
  
  //songllle blocks
  block16=new blocks(x1stBlockPos+80,y3rdBlockPos-50,blockWidth,blockHeight);
  //loncher
  LaunchConstrain=new Launcher(hexHitter.body,{x:y2ndBlockPos,y:450});

}
function draw(){
  if(backgroundImg){
    background(backgroundImg);

    
    textSize(35)
    fill("red")
    text("Score  " + Score, width-300, 50)
    
}
else{
    background(bgImG);

    
    textSize(35)
    fill("red")
    text("Score  " + Score, 750, 40)
    
}
  Engine.update(engine)
  
   Platform.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();


   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block8.score();
   block9.score();
   block10.score();
   block11.score();
   block12.score();
   block13.score();
   block14.score();
   block15.score();
   block16.score();

   hexHitter.display();

   
}
function mouseDragged(){

  Matter.Body.setPosition(hexHitter.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  LaunchConstrain.fly();
}
function keyPressed(){
  if(keyCode===32){
    LaunchConstrain.attach(hexHitter.body);
  }
}

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
