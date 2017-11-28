//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_For-Loop

//Define the variable for the size
let r = 255;
let g = 255;
let b = 255;

let speed = 3;
let diameter = 50;
let x1;
let y1;
let x2;
let y2;
function setup()
{
  createCanvas(500, 500);
  x1 = width/2;
  y1 = height/2;
  x2 = height/2;
  y2 = width/2;
  background(200);
}

function draw()
{

  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  //+ random number between -3 and 3
  x1 = constrain(x1, 0, 250);
  y1 = constrain(y1, 0, 250);
  //x2 =-x1+width;
  //y2 =-y1+height;
  x2 = map(x1, 0, 500, 500, 0);
  y2 = map(y1, 0, 500, 500, 0);
  //constrain makes sure that the circle(x1, y1) doesnt go beyond 0 or
  //width/height
  if(mouseIsPressed)
  {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill(r, g, b, 120);
  ellipse(x1, y1, diameter, diameter);
  ellipse(x1, y2, diameter, diameter);
  ellipse(x2, y2, diameter, diameter);
  ellipse(x2, y1, diameter, diameter);

}
