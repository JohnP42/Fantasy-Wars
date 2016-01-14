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
      // (x, y, spritekey, targetState, gameMode, mapkey, armykey, audio, overFrame, outFrame, downFrame, upFrame)
    battleStateButton = new MenuButton(528, 175, "mainMenuButtons", "mapSelectState", "battleGround", "map", "army", "battleButton", 0, 0, 1, 0);
    // battleStateButton.setButtonAnimation("");
    campaignStateButton = new MenuButton(528, 275, "mainMenuButtons", "mapSelectState", "campaign", "map", "army", "battleButton", 2, 2, 3, 2);
    // campaignStateButton._setButtonAnimation("");
    instructionsStateButton = new MenuButton(528, 375, "mainMenuButtons", "instructionsState", "map", "army", "battleButton", 4, 4, 5, 4);
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
