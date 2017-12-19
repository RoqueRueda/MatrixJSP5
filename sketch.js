var fontSize = 20;
var characterStream;

class KatanaCharacter {

  constructor(xPosition, yPosition, fallSpeed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.fallSpeed = fallSpeed;
    this.changeInterval = round(random(1, 20));
  }

  randomSymbol() {
    if (frameCount % this.changeInterval == 0) {
      this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
    }
  }

  render() {
    fill(0, 255, 180);
    text(this.value, this.xPosition, this.yPosition);
    this.fall();
    this.randomSymbol();
  }

  fall() {
    this.yPosition = (this.yPosition > height) ? 0 : this.yPosition += this.fallSpeed ;
  }
}

class CharacterStream {

  constructor() {
    this.characters = [];
    this.size = round(random(5,15));
    this.moveSpeed = random(1,6);
  }

  generateCharacters() {
    var y = 0;
    var x = width / 2;

    for(let i = 0; i<= this.size; i++) {
      var char = new KatanaCharacter(x, y, this.moveSpeed);
      char.randomSymbol();
      this.characters.push(char);
      y -= fontSize;
    }
  }

  render() {
    this.characters.forEach((char) => { char.render() })
  }

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  characterStream = new CharacterStream();
  characterStream.generateCharacters();
  textSize(fontSize);
}
  
function draw() {
  background(0);
  characterStream.render();
}