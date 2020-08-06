class Paper{
constructor(x,y,radius) {
    var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2

    }

    this.x=x;
    this.y=y;
    this.r=radius;
this.body=Bodies.circle(x,y, this.r, options)
   
    
    World.add(world, this.body);
    

}
    display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y)
    strokeWeight(3)
    fill("red")
        ellipse(0,0,this.r, this.r);
     pop();
    }
};

    