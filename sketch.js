var fontSize = 60;
var specialCharacter;

class KatanaCharacter {

  constructor(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  randomSymbol() {
    this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
  }

  render() {
    fill(0, 255, 180);
    text(this.value, this.xPosition, this.yPosition);
  }
}

function setup() {
  // are to draw
  createCanvas(window.innerWidth, window.innerHeight);
  // black background
  background(0);

  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;

  specialCharacter = new KatanaCharacter(centerX, centerY);
  specialCharacter.randomSymbol();
  textSize(fontSize);
}
  
function draw() {
  specialCharacter.render();
}