WIDTH = 500
HEIGHT = 500
BACKGROUNDCOLOUR = 220
MAX_COUNT = -1
RANDOM_SEED = 1

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(1);
  textSize(32);
  fill(50);
}

function draw() {
  strokeWeight(0)
  fill(50);
  randomSeed(RANDOM_SEED);
  background("PaleTurquoise");
  text("Tree Number:" + RANDOM_SEED, 20, 30)
  recurse(WIDTH/2, HEIGHT-50, WIDTH/2, HEIGHT-90, 0, 20)
  strokeWeight(10)
  stroke("SandyBrown")
  fill("Peru")
  arc(WIDTH/2, HEIGHT-40, 80, 80, 0, PI + QUARTER_PI, CHORD);
  if(MAX_COUNT < 6) {
    MAX_COUNT += 1;
    return;
  }
  RANDOM_SEED += 1;
  MAX_COUNT = -1
}

function recurse(x1, y1, x2, y2, count, lw) {
  if (count > MAX_COUNT) {
    strokeWeight(0);
    colourChange = random(-50,50);
    fill(144+colourChange, 238+colourChange, 144+colourChange);
    circle(x1, y1, MAX_COUNT*10);
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
      x2 + random(-2,2)*dx,
      y2 - random(0.5,2)*dy,
      count,
      lw/count);
  }
}