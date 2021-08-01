class Knight{
    constructor(x,y){
        var options ={
            isStatic: false
    }
this.body = Bodies.rectangle(x,y,20,20,options);
this.w = 20;
this.h = 20;
World.add(world,this.body);
this.image = loadImage("Knight/idle/idle1.png")
    }
   display(){
   imageMode(CENTER);
   var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
   rotate(this.body.angle)
   image(this.image, 0, 0, 75, 75)
   pop();
   } 
}
