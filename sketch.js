const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var maxDrops = 100;
var thunder1 , thunder2 , thunder3 , thunder4;
var drop;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/2.png")
}

function setup(){
   createCanvas(1000,600);
   engine = Engine.create();
   world = engine.world;

}

function draw(){
    background("black")
    for(var i=0; i<maxDrops; i++){
     maxDrops.push(new createDrop(random(0,400),random(0,400)));
    }
    if(frameCount%12 === 0){
        var thunder = createSprite(200,1000,10,10)
    }
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
    }
    drawSprites();
}   

