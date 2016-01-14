var instructionsState = {

  create: function () {
    _setBackgroundImage('instructions');
    battleStateButton = new MenuButton(175, 500, "mainMenuButtons", "mapSelectState", "map", "army", "battleButton", 0, 0, 1, 0);
    campaignStateButton = new MenuButton(450, 500, "mainMenuButtons", "campaignState", "map", "army", "battleButton", 2, 2, 3, 2);
  }

};

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
