var instructionsState = {

  create: function () {
    _setBackgroundImage('parchment');
    battleStateButton = new MenuButton(175, 500, "mainMenuButtons", "mapSelectState", "map", "army", "battleButton", 0, 0, 1, 0);
    campaignStateButton = new MenuButton(450, 500, "mainMenuButtons", "campaignState", "map", "army", "battleButton", 2, 2, 3, 2);
    game.add.text(300, 50, "Instructions", {font: "24px Herculanum"});
    game.add.text(30, 100, "This is FANTASY WARS, a turn-based strategy game in which two armies do battle on a", {font: "16px Herculanum", wordWrap: true, wordWrapWidth: 600})
  }

};

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
