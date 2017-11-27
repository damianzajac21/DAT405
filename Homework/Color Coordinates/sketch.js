//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405

function setup() {
  createCanvas(400, 400);
  //noLoop();
}

function draw() {
  background(0);
  var mouse1 = map(mouseX, 0, width, 0, 255);
  var mouse2 = map(mouseY, 0, width, 0, 255);
  var mouse3 = map(mouseX, 0, width, 255, 0);
  var mouse4 = map(mouseY, 0, width, 255, 0);

  var colour1 = color(255, 0, 0, mouse1);
  var colour2 = color(0, 255, 0, mouse2);
  var colour3 = color(255, 255, 0, mouse3);
  var colour4 = color(0, 255, 255, mouse4);

  fill(colour1);
  rect(0, 0, 200, 200);
  fill(colour2);
  rect(200, 0, 200, 200);
  fill(colour3);
  rect(0, 200, 200, 200);
  fill(colour4);
  rect(200, 200, 200, 200);

  }
//function mouseMoved() {
  //value = value + 5;
  //if (value > 255) {
    //value = 0;
  //}
//}

// Move the mouse across the page
// to change its value
