var mainMenuState = {
  preload: function() {
    game.load.audio('menus', 'game/assets/audio/BGM/menus.ogg');
    var battleStateButton = null;
    var campaignStateButton = null;
    var instructionsStateButton = null;
  },

  create: function() {
    _playSound('menus');
    _setBackgroundImage('logo');

    battleStateButton = new MenuButton(528, 175, "battleButton", "mapSelectState", "map", "army", "battleButton");
    // battleStateButton.setButtonAnimation("");
    campaignStateButton = new MenuButton(528, 275, "campaignButton", "campaignState", "map", "army", "battleButton");
    // campaignStateButton._setButtonAnimation("");
    instructionsStateButton = new MenuButton(528, 375, "instructionsButton", "instructionsState", "map", "army", "battleButton");
    // instructionsStateButton._setButtonAnimation("");
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

function _setButtonAnimation(imgKey) {
  this.animations.add("onClick", imgKey);
};
