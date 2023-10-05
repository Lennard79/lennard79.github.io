let zBereich; 







function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0, 0);
  zBereich.style('z-index', '-1');
  
  
  
}

function draw() {
  
  noStroke();
  fill(249,24,13,200);
  circle(mouseX, mouseY, 200);

  
  
  
}

// function mousePressed() {
  
//   background(0);
  
  
// }