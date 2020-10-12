class Player {
  constructor() {
    this.name = null;
    this.distance = 0;
    this.index = null;
    this.rank = null;
  }

  getCount(){
    var pCount = database.ref('/playerCount');
    pCount.on("value", function (data){
      playerCount = data.val();
    });
  }

  getCarsAtEnd() {
    database.ref('carsatend').on('value', (data) => {
      this.rank = data.val();
    });
  }

  static updateCarsAtEnd(rank) {
    database.ref().update({
      carsatend: rank
    }); 
  }

  updateCount(count){
    database.ref('/').update({
      playerCount:count
    });
  }

  update(){
    var playerIndex = "players/player" + player.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfo = database.ref('players');
    playerInfo.on('value', (data) => {
      allPlayers = data.val();
    })
  }

}
