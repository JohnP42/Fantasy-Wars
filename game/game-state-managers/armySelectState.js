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
    var selectArmyText = this.add.text(265, 20, "Choose Your Army", {font: "bold 24pt Herculanum", align: "left"})
    // mapThumb.width = 150;
    // mapThumb.height = 190;
    //TODO: Add minimap sprites;
    //      Add minimap text;
    //      Add page text
  }
}
