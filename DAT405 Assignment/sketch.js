//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let circleArray2 = [];
let arraySize = 100;
var bga = 0;
let angle = 0;
let white = 0;
let white2 = 30;

function setup() {
  //var canvas = createCanvas(windowWidth-20, windowHeight-75);
  var canvas = createCanvas(594, 841);
  //var pageWidth = window.outerWidth;
  //let = windowHeight
  //canvas.position(pageWidth/2-450, 67);
  //canvas.position(windowWidth/4, 65);
  //canvas.class("myCanvas");
  canvas.parent("CanvasContainer");
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-4, 2), random(-5, -1), 3);
  }
  for (let e=0; e<arraySize; e++) {
    circleArray2[e] = new Circle(width/2, height/2, random(-2, 4), random(1, 6), 3);
  }
}

function draw() {
  background(0, bga);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
  for (let e=0; e<circleArray2.length; e++){
    circleArray2[e].moveFunction();
    circleArray2[e].displayCircle();
  }

  angle += 10;

  //Get the sin and cos value from the angle
  let sinValueX = sin(angle);
  let sinValueY = cos(angle);

  let x2 = map(sinValueX, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let y2 = map(sinValueY, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let x3 = map(sinValueX, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let y3 = map(sinValueY, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let x4 = map(sinValueX, -1, 1, random(-200, 300), width-(random(-400, 300)));
  let y4 = map(sinValueY, -1, 1, random(-200, 300), width-(random(-400, 300)));

  fill(white, 40);
  noStroke();
  ellipse(30+x2, 50+y2, 50, 50);
  fill(white2, 60);
  ellipse(30+x3, 50+y3, 50, 50);
  ellipse(30+x4, 50+y4, 50, 50);
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(120, 200);
    //this.rd = random(55, 200);
    this.bl = random(120, 200);
    this.grn = 0;
    //this.a = 255;
    this.a = random(120, 255);

  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      //this.y = this.y + this.speedY*100;
      this.speedX *= -1;
      this.size = random(2, 4);
      //this.grn = random(120, 200);
      this.y += 10;
      this.rd = random(0, 55);
      //this.a = random(1, 5);
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
      this.rd = random(120, 200);
      //this.size = 10;
      //this.a = random(5, 20);
    }
  }


  //Class function that displays the ellipse
  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    //this.fillcol = color(this.rd, this.a)
    fill(this.fillcol);

    //let y = map(noise(xoff, yoff), 0, 1, 200,300); // Option #1: 2D Noise

    //noise()
    //random()
    //vertex
    ellipse(this.x, this.y, this.size, this.size);
    //bezier(85, 20, 10, 10, 90, 90, 15, 80);
  }
}

function touchStarted(){
  if (bga == 0) {
    //bgcol = 255;
    bga = 255;
    white = 150;
    white2 = 150;
    this.a = 255;
  } else {
    //bgcol = 255;
    bga = 0;
    white = 0;
    white2 = 30;
    this.a = random(120, 255);
  }
}
