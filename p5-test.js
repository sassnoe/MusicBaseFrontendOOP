let circleX = -100;
let circleY = -100;
let circleD = 40;

function setup() {
//   createCanvas(1920, 1080);
    createGraphics(windowWidth, windowHeight);
  //   frameRate(10);
}
let clicked = false;
// let timeCheck = Date.now();
function draw() {
  background("transparent");
  noFill();
  strokeWeight(3);
  stroke("green");
  circle(circleX, circleY, circleD);
  circle(circleX, circleY, circleD * 0.5);
  circle(circleX, circleY, circleD * 0.75);

  if (clicked) {
    circleD += 10;
  }
}

function mousePressed() {
  circleX = mouseX;
  circleY = mouseY;
  circleD = 0;
  clicked = true;
}
