class Rect {
  constructor(x, y, w, h, pixelData) {
    this.w = w; 
    this.h = h;
    this.pixelData = pixelData;
    this.box = Bodies.rectangle(x, y, s, s);
    Composite.add(engine.world, this.box);
  }
  
  display() {
    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(2);
    
    noStroke();
    push();
    let x = this.box.position.x;
    let y = this.box.position.y;
    let angle = this.box.angle;
    translate(x, y);
    rotate(angle);
    
    for (let i=0; i<this.w; i++) {
      for (let j=0; j<this.h; j++) {
        let index = 4 * (j * this.w + i);
        let r = this.pixelData[index + 0];
        let g = this.pixelData[index + 1];
        let b = this.pixelData[index + 2];
        let a = this.pixelData[index + 3];
        
        fill(r, g, b, a);
        rect(i - this.w/2, j - this.h/2, 1, 1);
      }
    }
    
    pop();
  }
}