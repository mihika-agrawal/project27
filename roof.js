class Roof{

    constructor(w,h){
    var options={
      isStatic:true
    }
      this.ground=Bodies.rectangle(500,20,w,h,options);
      World.add(world,this.ground);
      this.width=w;
      this.height=h;
    
    
    }
    display(){
      fill("grey");
      rectMode(CENTER);
     var p= this.ground.position;
     rect(p.x,p.y,this.width,this.height);
    
    }
    }
    