var fontSize = 60;
var specialCharacter;

class KatanaCharacter {

  constructor(xPosition, yPosition, fallSpeed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.fallSpeed = fallSpeed;
  }

  randomSymbol() {
    this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
  }

  render() {
    fill(0, 255, 180);
    text(this.value, this.xPosition, this.yPosition);
    this.fall();
  }

  fall() {
    this.yPosition = (this.yPosition > height) ? 0 : this.yPosition += this.fallSpeed ;
  }
}

function setup() {
  // are to draw
  createCanvas(window.innerWidth, window.innerHeight);
  // black background
  background(0);

  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;

  specialCharacter = new KatanaCharacter(centerX, centerY, 5);
  specialCharacter.randomSymbol();
  textSize(fontSize);
}
  
function draw() {
  background(0);
  specialCharacter.render();
}