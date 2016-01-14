var mapSelectState = {

  init: function(mapKey, armyKey1, armyKey2, gameMode, audio) {
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
    var selectMapText = this.add.text(265, 30, "Choose Your Map", {font: "bold 24pt Herculanum", align: "left"});

    // first map
    // args = x, y, spritekey(map thumbnail), targetState, tilemap name, army name, audio
    var mapThumb1 = new MenuButton(95, 90, 'landBridgeThumb1', "p1ArmySelectState", this.gameMode, "landBridge", "army", "flash");
    var mapThumb1Text = this.add.text(95, 300, "Land Bridge", {font: "16pt Herculanum", align: "left"});
    // second map
    var mapThumb2 = new MenuButton(95, 340, 'oceanpassThumb2', "p1ArmySelectState", this.gameMode, "oceanPass", "army", "flash");
    var mapThumb2Text = this.add.text(95, 550, "Ocean Pass", {font: "16pt Herculanum", align: "left"});

    // third map
    var mapThumb3 = new MenuButton(460, 90, 'colosseumThumb3', "p1ArmySelectState", this.gameMode, "colosseum", "army", "flash");
    var mapThumb3Text = this.add.text(460, 300, "Colosseum", {font: "16pt Herculanum", align: "left"});

    // fourth map
    var mapThumb4 = new MenuButton(460, 340, 'scorpionValleyThumb4', "p1ArmySelectState", this.gameMode, "scorpionValley", "army", "flash");
    var mapThumb4Text = this.add.text(460, 550, "Scorpion Valley", {font: "16pt Herculanum", align: "left"});
  }

}

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
