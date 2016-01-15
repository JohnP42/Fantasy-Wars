var instructionsState = {

  create: function () {
    _setBackgroundImage('instructions');
    battleStateButton = new MenuButton(528, 175, "mainMenuButtons", "mapSelectState", "battleGround", "map", "army1", "army2", "battleButton", 0, 0, 1, 0);
    campaignStateButton = new MenuButton(528, 275, "mainMenuButtons", "mapSelectState", "campaign", "map", "army1", "army2", "battleButton", 2, 2, 3, 2);
  }

};

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
