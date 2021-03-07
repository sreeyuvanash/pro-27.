class Bob {
    constructor(x,y) {
      var options = {
          //isStatic:false,
         restitution:1.3,
          friction:1,
          //density:0.8
      }
      this.body = Bodies.circle(x,y,20,options);
      this.width = 41
      //this.y = y
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill('silver');
      ellipse(0, 0, this.width,this.y );
      pop();
    }
  };