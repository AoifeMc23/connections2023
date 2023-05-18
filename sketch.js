var size = 30;
var maxSize = 100;
var reset = false;
var original = 30;

function setup() {
  var canvas1 = createCanvas(windowWidth, windowHeight);
  canvas1.position(0, 0);

  canvas1.parent("#canvas1");

  noLoop();
}

var mouseOn = document.getElementById("mouse_on");
var mouseOff = document.getElementById("mouse_off");

mouseOff.style.display = "none";

canvas1.style.display = "none";

function mouseTurnOn() {
  if ((mouseOff.style.display = "none")) {
    canvas1.style.display = "block";
    mouseOn.style.display = "none";
    mouseOff.style.display = "block";
    loop();
  }
}

function mouseTurnOff() {
  if ((mouseOff.style.display = "block")) {
    mouseOn.style.display = "block";
    mouseOff.style.display = "none";
    canvas1.style.display = "none";
    clear();
    noLoop();
  } else {
    mouseOff.style.display = "block";
  }
}

function draw() {
  background(000000);
  noStroke();

  drawingContext.shadowBlur = 25;
  drawingContext.shadowColor = color(178, 158, 204);
  fill(178, 158, 204);
  ellipse(mouseX + 20, mouseY + 20, size, size);
}

function mousePressed() {
  if (size <= maxSize && reset === false) {
    size += 10;
  }

  if (size >= maxSize) {
    reset = true;
  }

  if (reset === true) {
    size -= 10;
  }

  if (reset === true && size === original) {
    reset = false;
    size += 10;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
