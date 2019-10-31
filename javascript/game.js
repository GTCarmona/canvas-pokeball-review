class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.player = new Player(this);
    this.background = new Background(this);
    this.controls = new Controls(this);
    this.controls.setControls();
    this.pokemons = []
    this.speed= 3000
    this.pokemonTimer= 0
  }

  
// method that is called when I press the start button
  start() {
    this.animation();
  }
  //method to call all my "drawing" methods
  drawEverything() {
      this.clearAll () 
      this.background.draw();
      //draw all the pokemons
      for (let i = 0; i < this.pokemons.length; i++) {
          this.pokemons[i].draw();
        }  
        this.player.draw();
    }

    // Start the animation loop
    animation(timestamp) {
    //   console.log(timestamp)
    this.drawEverything()
    this.updateEverything(timestamp)

    // requestAnimationFrame will generate a timestamp that we will use it as a reference
    //  for doing other things, and call the animation() again
    window.requestAnimationFrame((timestamp) => this.animation(timestamp));
  }
    //method that will update everything
    updateEverything(timestamp) {
    this.background.update()
    this.player.update()


    if(this.pokemonTimer < timestamp - this.speed){
        this.pokemons.push(new Pokemon(this))
        this.pokemonTimer = timestamp
      }


    // at every 3 seconds (value defined in the constructor) we push a new pokemon object into an array
    for (let i = 0; i < this.pokemons.length; i++) {
        this.pokemons[i].update();
      }  
    for (let i = this.pokemons.length - 1; i >= 0; i--) {
    if (this.player.checkCollision(this.player, this.pokemons[i])) {
      this.player.score++;
      this.pokemons.splice(i, 1);
    }
  }
    }

  clearAll () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  resetGame() {
    this.player = new Player(100, 100);

  }

}
