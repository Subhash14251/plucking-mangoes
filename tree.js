  
class Tree {
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("sprites/tree.png")
           }
display(){
       var treePos=this.tree.position;	
    push();
    translate(treePos.x, treePos.y);
    rotate(this.tree.angle);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,200,10,500,500);;
    pop();
}
}