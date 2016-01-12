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
    _setBackgroundImage('parchment');
    var selectMapText = this.add.text(265, 20, "Choose Your Map", {font: "bold 24pt Herculanum", align: "left"});
    var mapThumb = new MenuButton(20, 70, 'map1', "armySelectState", "testmap", "army", "flash");
  }

}

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
