class Umbrella{
    constructor(x,y,r){
        var options={

        }
this.umbrellaImage = loadImage("images/Walking Frame/walking_4.png")
this.x = x;
this.y = y;
this.r = r;        
     this.body = Bodies.circle(x,y,10,options)
     this.radius = 10;
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(2)
        stroke("blue")
        ellipse(0,0,this.radius)
        pop()
    }
}