class Canon{
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      RectMode(CENTER);
      Rect(-10,-20, this.width, this.height);
      Arc(this.x-40,this.y+80,180,230,PI,TWO_PI);
      pop();
    }
  }
  