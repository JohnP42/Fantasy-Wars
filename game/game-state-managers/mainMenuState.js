var mainMenuState = {
  preload: function() {
    game.load.audio('menus', 'game/assets/audio/BGM/menus.ogg');
  },

  create: function() {
    _playSound('menus');
    _setBackgroundImage('logo');

    var menuButton = new MenuButton(528, 175, "battleButton", "mapSelectState", "map", "army", "battleButton");
    var menuButton = new MenuButton(528, 275, "campaignButton", "campaignState", "map", "army", "battleButton");
    var menuButton = new MenuButton(528, 375, "instructionsButton", "instructionsState", "map", "army", "battleButton");
  }
};

function _playSound(audioKey) {
  var bgm = game.add.audio(audioKey);
  bgm.play();
};

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
