let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Eyes
  fill(0, 0, 255);
  square(50, 50, 50);
  square(200, 50, 50);

  // Mouth
  fill(255, 0, 255,);
  ellipse(150, 150, i, 20);

  // Triangle
  triangle(30, 75, i, 20, i, 75)


  // Increment i
  i = i+1;
}

