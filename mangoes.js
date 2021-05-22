class Mangoes{
    constructor(x,y,r){
        var options={
            'isStaic' : true,
            'restitiution' :0,
            'friction' : 1
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
       this.mangoes=Bodies.circle(this.x,this.y,this.r,options);
       this.image= loadImage("sprites/mango.png");
    
    }

    display() {
        var MangoPos=this.mangoes.position;	
        push();
        translate(MangoPos.x, MangoPos.y);
        rotate(this.mangoes.angle);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0,0,70,70);
        pop();

    }

}