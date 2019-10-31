class Pokemon {
  constructor(game) {
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.radius = 40;
    this.x = this.width + 200;
    this.y = this.radius + Math.floor((this.height - 2 * this.radius) * Math.random());
    this.vx = -4; // Velocity y
    this.size = 4 * this.radius;
    let randomNumber = 1 + Math.floor(150 * Math.random());
    this.img = new Image();
    this.img.src = `https://pokemon-fight.surge.sh/images/pokemons/${randomNumber}.png`;
  }
  draw() {
    this.context.save(); // Save the current context state

    this.context.fillStyle = "red";
    // Draw the picture
    this.context.translate(this.x, this.y);
    this.context.drawImage(this.img, -    this.size / 2, -    this.size / 2,     this.size,     this.size);

    this.context.restore(); // Restore the context state from the begining
  }
  update() {
    this.x += this.vx;
  }
}
