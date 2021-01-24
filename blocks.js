class blocks {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 1,
      friction: 1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
 
  display() { // console.log(this.body.speed);
    if (this.body.speed < 5) {

      var pos = this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    } else {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      //rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
  score(){
    if(this.visibility<0&&this.visibility>-105){
      Score++
    }
  }
};