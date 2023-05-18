function setup() {
  var canvas1 = createCanvas(windowWidth, windowHeight);
  canvas1.position(0, 0);

  canvas1.parent("#canvas1");

  colorMode(HSB, 360, 100, 100, 100);

  noLoop();
}

var mouseOn = document.getElementById("mouse_on");
var mouseOff = document.getElementById("mouse_off");

mouseOff.style.display = "none";

function mouseTurnOn() {
  if ((mouseOff.style.display = "none")) {
    mouseOn.style.display = "none";
    mouseOff.style.display = "block";
    loop();
  }
}

function mouseTurnOff() {
  if ((mouseOff.style.display = "block")) {
    mouseOn.style.display = "block";
    mouseOff.style.display = "none";
    clear();
    noLoop();
  } else {
    mouseOff.style.display = "block";
    loop();
  }
}

function draw() {
  noStroke();

  drawingContext.shadowBlur = 1000;
  drawingContext.shadowColor = (207, 7, 99);

  ellipse(mouseX, mouseY, 33, 33);

  fill(226, 141, 180, 4);

  blendMode(OVERLAY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
