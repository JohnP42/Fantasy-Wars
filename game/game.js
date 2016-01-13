window.onload = function() {
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'canvasGame');
  _addGameStates();

  game.state.start("bootState");
};

function _addGameStates() {
  // Add necessary game states to the Phaser Game State Manager
  game.state.add("bootState", bootState);
  game.state.add("loadState", loadState);
  game.state.add("mainMenuState", mainMenuState);
  game.state.add("mapSelectState", mapSelectState);
  game.state.add("armySelectState", armySelectState);
  game.state.add("instructionsState", instructionsState);
  game.state.add("battleState", battleState);
  game.state.add("victoryState", victoryState);
};
