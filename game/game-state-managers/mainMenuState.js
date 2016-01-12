var mainMenuState = {
  preload: function() {
    game.load.audio('menus', 'game/assets/audio/BGM/menus.ogg');
  },

  create: function() {
    _playSound('menus');
    var logo = this.add.image(0, 0, 'logo');
    logo.width = this.game.width;
    logo.height = this.game.height;

    var menuButton = new MenuButton(528, 200, "battleButton", "mapSelectState", "map", "army", "battleButton");
  }
};

function _playSound(audioKey) {
  var bgm = game.add.audio(audioKey);
  bgm.play();
};
