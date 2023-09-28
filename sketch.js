let zBereich; 







function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0, 0);
  zBereich.style('z-index', '1');
  
  
  
}

function draw() {
  
  noStroke();
  fill(249,24,13,30);
  circle(mouseX, mouseY, 20);

  
  
  
}

// function mousePressed() {
  
//   background(0);
  
  
// }