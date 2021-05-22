class Stone{
     constructor(x,y,r){
     var options= {
        'isStatic' : false,
        'restitution' : 0,
        'fricton' : 1,
        'density' : 1.2
      }
  
      this.x=x;
      this.y=y;
      this.r=r;
  this.image= loadImage("sprites/stone.png");
     this.body=Bodies.circle(x,y,this.r,options);
    

     }
display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    var stonePos=this.body.position;	
    push();
    translate(stonePos.x, stonePos.y);
    rotate(this.body.angle);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image, 0,0,70,70);
    pop();
     

}

}