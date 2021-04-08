class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      
      this.width = width;
      this.height = height;
      
      this.Image=loadImage("images/rock1.png");
      World.add(myWorld,this.body);
    }
    show()
    {
      
        imageMode(CENTER);
        image(this.Image, this.body.position.x, this.body.position.y,this.width, this.height);
        
    }
  
  
  }
  