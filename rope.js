class Rope {

    constructor(bodyA,bodyB,offsetX,offsetY){
    
       this.offsetX=offsetX;
       this.offsetY=offsetY;
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
   pointB:{x:this.offsetX,y:this.offsetY}
    }
    
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    
    }
    display(){
    
    var pointA =this.rope.bodyA.position;
 
     
    strokeWeight(5);
    line(pointA.x,pointA.y,this.offsetX,this.offsetY);
    }
    }
    