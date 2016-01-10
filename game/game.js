window.onload = function() {

  game = new Phaser.Game(800, 600, Phaser.AUTO, '');

  game.state.add("bootState", bootState);
  game.state.add("loadState", loadState);
  game.state.add("mainMenuState", mainMenuState);
  game.state.add("battleState", battleState);

  game.state.start("bootState");

};
