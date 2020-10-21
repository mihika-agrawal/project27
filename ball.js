class Ball{
    constructor(x,y){
   var options={
       isStatic:false,
   restitution:0.7,
   friction:0.5,
   density:3.2
   }
   this.body=Matter.Bodies.circle(x,y,30,options);
   World.add(world,this.body);
   this.radius=50;
   this.body.x=x;
   this.body.y=y
   }
   display(){
   fill("purple");
    var p=this.body.position;
   ellipseMode(CENTER)
   ellipse(p.x,p.y,this.radius*2);
   }
}
   