class Dustbin{
constructor(){


this.ground1 = Bodies.rectangle(width/2, 660, 150, 10 , {isStatic:true} );
World.add(world, this.ground1);
	 this.ground2 = Bodies.rectangle(width/2-75, 650, 10, 50 , {isStatic:true} );
	 World.add(world, this.ground2);
			 this.ground3 = Bodies.rectangle(width/2+75, 650, 10, 50 , {isStatic:true} );
 			World.add(world, this.ground3);
	Engine.run(engine);
	this.image= loadImage("dustbingreen.png");
}
display(){
	rectMode(CENTER)
	imageMode(CENTER)
image(this.image,this.ground1.position.x-50,this.ground1.position.y-50,150,100);
//rect(this.ground2.position.x,this.ground2.position.y,10,50);
//rect(this.ground3.position.x,this.ground3.position.y,10,50);   
}
}

