class Game {
  constructor() {

  }

  getState(){
    var gState = database.ref('/gameState');
    gState.on("value", (data) => {
      gameState = data.val();
    });
  }

  update(state){
    database.ref('/').update({
      gameState:state
    });
  }

  async start(){
    if (gameState === 0) {
      player = new Player();
      var numofplayers = await database.ref('playerCount').once('value');

      if(numofplayers.exists()){
        playerCount = numofplayers.val();
        player.getCount();

     }

     form = new Form();
     form.display();
    }

    car1 = createSprite(100, 200);
    car1.addImage(c1);
    car2 = createSprite(300, 200);
    car2.addImage(c2);
    car3 = createSprite(500, 200);
    car3.addImage(c3);
    car4 = createSprite(700, 200);
    car4.addImage(c4);

    cars = [car1, car2, car3, car4];

  }

  play(){
    form.hide();
    textAlign(CENTER);
    text("Started", 200, 100);
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if (allPlayers !== undefined) {
      background(gImg);
      image(tImg, 0, -height*4, width, height*5);
      var index = 0;
      var x = 200;
      var y;
      for(var p in allPlayers){
        index++;
        x += 300;
        y = height - allPlayers[p].distance + 50;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {
          camera.position.x = width/2;
          camera.position.y = cars[index - 1].y;
          fill("antiquewhite");
          ellipse(cars[index - 1].x, cars[index - 1].y, 60, 60);
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index != null){
      player.distance += 100;
      player.update();
    }
    if (player.distance > 4600) {
      gameState = 2;
      player.rank++;
      Player.updateCarsAtEnd(player.rank);
    }

    drawSprites();
  }

  end() {
    alert("game has ended!😀");
    alert(player.rank);
  }

}
