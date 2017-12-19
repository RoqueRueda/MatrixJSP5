var fontSize = 20;
var arrayOfStreams = [];

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
    fill(0, 209, 255);
    text(this.value, this.xPosition, this.yPosition);
    this.fall();
    this.randomSymbol();
  }

  fall() {
    this.yPosition = (this.yPosition > height) ? 0 : this.yPosition += this.fallSpeed ;
  }
}

class CharacterStream {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.characters = [];
    this.size = round(random(5,35));
    this.moveSpeed = round(random(1,9));
  }

  generateCharacters() {
    for(let i = 0; i<= this.size; i++) {
      var char = new KatanaCharacter(this.x, this.y, this.moveSpeed);
      char.randomSymbol();
      this.characters.push(char);
      this.y -= fontSize;
    }
  }

  render() {
    this.characters.forEach((char) => { char.render() })
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  var x = 0;
  var y = 0;
  for(let i = 0; i <= width / fontSize; i++) {
    const stream = new CharacterStream(x, random(0, -300));
    stream.generateCharacters();
    arrayOfStreams.push(stream);
    x += fontSize;
  }

  textSize(fontSize);
}
  
function draw() {
  background(0, 100);
  arrayOfStreams.forEach(
    function(stream) {
      stream.render(); 
    }
   );
}