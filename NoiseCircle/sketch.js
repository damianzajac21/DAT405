//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

let r = 255;
let g = 255;
let b = 255;

let speed = 3;
let diameter = 50;
let x1;
let y1;
function setup()
{
  createCanvas(640, 480);
  x1 = width/2;
  y1 = height/2;
}

function draw()
{
  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);
  if(mouseIsPressed)
  {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill(r, g, b, 120);
  ellipse(x1, y1, diameter, diameter);

}
