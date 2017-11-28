
let x;
let y;
let speedX;
let speedY;

let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(400, 400);
  //x = random(width);
  //y = random(height);
  //gets random position
  x = width/2;
  y = height/2;
  speedX = random(-5., 5.);
  //negative number can make it go backwards
  speedY = random(1., 5.);
  textSize(16);
}

function draw() {
  background(100);

  //x++;
  //y++;
  //adds 1
  x += speedX;
  y += speedY;


  //if (x>width) x = x * -1.;
  if (x>width) x = 0;
  if (x<0) x = width;
  if (y>height) y = 0;
  //fill(r, g, b);
  if (y<0) y = height;

  ellipse(x, y, 50, 50);
  //ellipse(x, height/2, 50, 50);
  text(x, width/2, height/2-20);
  text(y, width/2, height/2+20);
  if (x>height) {
       r = random(255);
       g = random(255);
       b = random(255);
    }
  if (x>width) {
       r = random(255);
       g = random(255);
       b = random(255);
    }

  fill(r, g, b);
  }
  //text(SpeedX, width/2, height/2+20);
  //gets the coordinates, places text in the middle
