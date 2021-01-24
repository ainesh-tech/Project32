class HexHitter{
    constructor(x,y,r){
       var options={
            isstatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);

        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;

        var poss=this.body.position;
        push();
        translate(poss.x,poss.y);

        rotate(angle);
        
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}