class Package {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.Package(x, y, width, height, options);
      this.width = width;
      this.height = height;
      console.log(this.body);
      World.add(world, this.body);
    }
    Package(x, y, width, height, options) {
        this.body = Bodies.rectangle(x, y, width, height, options);
    }

    display(){
      var pos =this.body.position;
      var angle=this.body.angle;


      package = new package(240,100,50,50);
  
      push();
      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(angle);
  
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop();