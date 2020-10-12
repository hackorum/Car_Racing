var gameState = 0;
var playerCount, database, form, player, game, allPlayers;
var distance = 0;
var car1, car2, car3, car4;
var cars;

function preload() {
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
  c3 = loadImage("images/car3.png");
  c4 = loadImage("images/car4.png");
  gImg = loadImage("images/ground.png");
  tImg = loadImage("images/track.jpg");
}

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 30);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }

  if (gameState === 2) {
    game.end();
  }

}
