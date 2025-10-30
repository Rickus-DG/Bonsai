WIDTH = 500
HEIGHT = 500
BACKGROUNDCOLOUR = 220
function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(1);
}

function draw() {
  background("PaleTurquoise");
  recurse(WIDTH/2, HEIGHT-50, WIDTH/2, HEIGHT-90, 0, 20)
  strokeWeight(10)
  stroke("SandyBrown")
  fill("Peru")
  arc(WIDTH/2, HEIGHT-40, 80, 80, 0, PI + QUARTER_PI, CHORD);
}

function recurse(x1, y1, x2, y2, count, lw) {
  maxcount = 6
  if (count > maxcount) {
    strokeWeight(0);
    colourChange = random(-50,50);
    fill(144+colourChange, 238+colourChange, 144+colourChange);
    circle(x1, y1, maxcount*10);
    return;
  }
  dx = 25;
  dy = 25;
  count += 1;
  for (let x = 0; x < count; x += 1) {
    strokeWeight(1)
    circle(x1, y1, lw);
    strokeWeight(lw)
    stroke("SaddleBrown")
    line(x1, y1, x2, y2);
    recurse(
      x2,
      y2,
      x2+random(-2,2)*dx,
      y2 - random(0.5,2)*dy,
      count,
      lw/count);
  }
}