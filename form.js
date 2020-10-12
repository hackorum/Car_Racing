class Form {
  constructor() {
   this.input = createInput();
   this.button = createButton('PLAY!');
   this.greeting = createElement('h2');
   this.res = createButton('.');
  }

  display(){

    this.input.position(width/2 - 100, height/2);
    this.button.position(width/2 + 50, height/2);
    this.res.position(width - 50, height - 30);

    var elt = createElement('h1', "Car racing game");
    elt.position(width/2 - 50, 0);


    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      this.greeting.html('Hello ' + this.input.value() + '!');
      this.greeting.position(width/2 - 200, height/2);
      playerCount += 1 ;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });

    this.res.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
      database.ref().child('players').remove();
    });

  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}
