var mapSelectState = {

  init: function(mapKey, armyKey, audio) {
    // init function takes arguments for menu button; not need here
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
    var selectMapText = this.add.text(265, 20, "Choose Your Map", {font: "bold 24pt Herculanum", align: "left"});
    var mapThumb = new MenuButton(20, 70, 'map1', "armySelectState", "map1", "army", "flash");
    // mapThumb.width = 150;
    // mapThumb.height = 190;
    //TODO: Add minimap sprites;
    //      Add minimap text;
  }

}
