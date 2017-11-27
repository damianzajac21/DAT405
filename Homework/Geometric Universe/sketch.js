//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  frameRate(25);
  noLoop();
}

function draw() {
  background(10);
  //Create 300 shares using the for-loop
  for (var i = 0; i < 500; i++) {
    push();
    translate(random(width), random(height));
    stroke(random(255), random(255), random(255));
    rotate(random(10*PI));
    scale(random(1.5), random(1.5));
    ellipse(0,0,40,40);
    pop();
  }
}
