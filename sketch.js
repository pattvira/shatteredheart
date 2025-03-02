/*
----- Coding Tutorial by Patt Vira ----- 
Name: A Shattered Heart
Video Tutorial: https://youtu.be/8MrjIKIZKOc

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

// Matter.js variables
const {Engine, Bodies, Composite, Mouse, MouseConstraint} = Matter;
let engine, mouse, mouseConstraint;
let boxes = []; let s = 20; 
let t, b, l, r; let boundarySize = 20;

// Image variables
let img, bg; 
let cols, rows; let gridSize = 20;

function preload() {
  img = loadImage("images/heart.png");
  bg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(400, 400);
  //Matter.js 
  rectMode(CENTER);
  engine = Engine.create();
  engine.world.gravity.y = 0;
  
  mouse = Mouse.create(document.body);
  mouseConstraint = MouseConstraint.create(engine, mouse);
  Composite.add(engine.world, mouseConstraint);
  
  t = new Boundary(width/2, -boundarySize/2, width, boundarySize);
  b = new Boundary(width/2, height+boundarySize/2, width, boundarySize);
  r = new Boundary(-boundarySize/2, height/2, boundarySize, height);
  l = new Boundary(width + boundarySize/2, height/2, boundarySize, height);
  
  // Images
  cols = width/gridSize;
  rows = height/gridSize;
  
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      let region = img.get(i*gridSize, j*gridSize, gridSize, gridSize);
      region.loadPixels();
      
      let isTransparent = true;
      for (let i=0; i<region.pixels.length; i+=4) {
        let alpha = region.pixels[i + 3];
        if (alpha > 0) {
          isTransparent = false;
          break;
        } 
      }
      
      if (!isTransparent) {
        // noFill();
        // stroke(255, 0, 0);
        // strokeWeight(2);
        // rect(i*gridSize, j*gridSize, gridSize, gridSize);
        
        let x = i*gridSize + gridSize/2;
        let y = j*gridSize + gridSize/2;
        boxes.push(new Rect(x, y, s, s, region.pixels));
        
      }
      
      
    }
  }
  
}

function draw() {
  background(220);
  Engine.update(engine);
  image(bg, 0, 0);
  
  // t.display();
  // b.display();
  // l.display();
  // r.display();
  
  
  for (let i=0; i<boxes.length; i++) {
    boxes[i].display();
  }
  
  
}





