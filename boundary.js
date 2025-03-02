class Boundary {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.boundary = Bodies.rectangle(x, y, this.w, this.h, {isStatic: true});
    Composite.add(engine.world, this.boundary);
  }
  
  display() {
    fill(0);
    rect(this.boundary.position.x, this.boundary.position.y, this.w, this.h);
  }
}