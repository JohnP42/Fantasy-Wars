var armySelectState = {

  init: function(mapKey, armyKey, audio) {
    this.mapKey = mapKey;
  },

  preload: function() {
    //TODO: Load background;
    //      Load minimaps;
    //      Load minimap text;
    //      Load text
  },

  create: function() {
    _setBackgroundImage('parchment');
    var selectArmyText = this.add.text(265, 20, "Choose Your Army", {font: "bold 24pt Herculanum", align: "left"});
    // pass to new MenuButton(x, y, spriteKey, targetState, mapkey, armykey, audio)
    var dwarfImage = this.add.image(20, 70, "dwarfImage");
    var dwarfArmyButton = new MenuButton(450, 110, "dwarvesButton", "battleState", this.mapKey, "dwarf", "flash");

    var elfImage = this.add.image(20, 245, "elfImage");
    var elfArmyButton = new MenuButton(450, 285, "elvesButton", "battleState", this.mapKey, "elf", "flash");

    var orcImage = this.add.image(20, 420, "orcImage");
    var orcArmyButton = new MenuButton(450, 462, "orcsButton", "battleState", this.mapKey, "orc", "flash");
    // mapThumb.width = 150;
    // mapThumb.height = 190;
    //TODO: Add minimap sprites;
    //      Add minimap text;
    //      Add page text
  }
}

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};