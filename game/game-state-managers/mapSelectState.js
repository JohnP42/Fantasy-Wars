var mapSelectState = {

  init: function(mapKey, armyKey, gameMode, audio) {
    // init function takes arguments for menu button; not need here
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
    var selectMapText = this.add.text(265, 20, "Choose Your Map", {font: "bold 24pt Herculanum", align: "left"});

    // first map
    // args = x, y, spritekey(map thumbnail), targetState, tilemap name, army name, audio
    console.log(this.gameMode);
    var mapThumb = new MenuButton(20, 70, 'map1', "armySelectState", this.gameMode, "oceanPass", "army", "flash");
    var mapThumbText = this.add.text(20, 260, "Two Rivers", {font: "16pt Herculanum", align: "left"});
    // second map

    // third map

    // fourth map
  }

}

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
