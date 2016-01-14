var p1ArmySelectState = {

  init: function(mapKey, armyKey1, armyKey2, gameMode, audio) {
    this.mapKey = mapKey;
    this.gameMode = gameMode;
  },

  preload: function() {
    //TODO: Load background;
    //      Load minimaps;
    //      Load minimap text;
    //      Load text
  },

  create: function() {
    _setBackgroundImage('parchment');
    var selectArmyText = this.add.text(265, 20, "Player 1, Choose Your Army", {font: "bold 24pt Herculanum", align: "left"});
    // pass to new MenuButton(x, y, spriteKey, targetState, tilemap name, armykey, audio)
    var dwarfImage = this.add.image(20, 70, "dwarfImage");
    var dwarfArmyButton = new MenuButton(450, 110, "armySelectionButtons", "p2ArmySelectState", this.gameMode, this.mapKey, "dwarf", "armyKey2", "flash", 2, 2, 3, 2);

    var elfImage = this.add.image(20, 245, "elfImage");
    var elfArmyButton = new MenuButton(450, 285, "armySelectionButtons", "p2ArmySelectState", this.gameMode, this.mapKey, "elf", "armyKey2", "flash", 0, 0, 1, 0);

    var orcImage = this.add.image(20, 420, "orcImage");
    var orcArmyButton = new MenuButton(450, 462, "armySelectionButtons", "p2ArmySelectState", this.gameMode, this.mapKey, "orc", "armyKey2", "flash", 4, 4, 5, 4);

  }
}

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
