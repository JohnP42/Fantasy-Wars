var armySelectState = {

  init: function(mapKey) {
    this.selectedMap = mapKey
  },

  preload: function() {
    //TODO: Load background;
    //      Load minimaps;
    //      Load minimap text;
    //      Load text
  },

  create: function() {
    var parchment = this.add.image(0, 0, 'parchment');
    parchment.width = this.game.width;
    parchment.height = this.game.height;
    var selectArmyText = this.add.text(265, 20, "Choose Your Army", {font: "bold 24pt Herculanum", align: "left"});

    var dwarfImage = this.add.image(20, 70, "dwarfImage", "dwarf");
    var dwarfArmyButton = new MenuButton(450, 110, "dwarvesButton", "battleState", "dwarf");

    var elfImage = this.add.image(20, 245, "elfImage", "elf");
    var elfArmyButton = new MenuButton(450, 285, "elvesButton", "battleState", "elf");

    var orcImage = this.add.image(20, 420, "orcImage", "orc");
    var orcArmyButton = new MenuButton(450, 462, "orcsButton", "battleState", "orc");
    // mapThumb.width = 150;
    // mapThumb.height = 190;
    //TODO: Add minimap sprites;
    //      Add minimap text;
    //      Add page text
  }
}
