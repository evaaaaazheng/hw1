var x=100;
var y=300;
var radius;
var x2=200;
var y2=300;
var x3=300;
var y3=300;



function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255, 204, 0);
  rect(x, y, 65, 65);
  rect(x2, y2, 65, 65);
  ellipse(x3,y3,65,75)
  
if (dist(mouseX, mouseY, x, y) < 65) {
      x = x+3;
    }

if (dist(mouseX, mouseY, x2, y2) < 65) {
      y2 = y2+3;
    }
  if (dist(mouseX, mouseY, x3, y3) < 65) {
      y3 = y3+3;
    x3 = x3+3;
    }
    fill(255, 200, 200, 200);
  stroke(0, 500, 0);



x3 += random(-1, 1);
y3 += random(-1, 1);
  x2 += random(-3, 3);
y2 += random(-1, 1);
  x += random(-1, 1);
y += random(-2, 2);
}
