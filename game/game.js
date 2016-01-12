window.onload = function() {

  game = new Phaser.Game(800, 600, Phaser.AUTO, '');

  game.state.add("bootState", bootState);
  game.state.add("loadState", loadState);
  game.state.add("mainMenuState", mainMenuState);
  game.state.add("mapSelectState", mapSelectState);
  game.state.add("armySelectState", armySelectState);
  game.state.add("battleState", battleState);
  game.state.add("victoryState", victoryState);
  game.state.start("bootState");

};
