var victoryState = {
    winner: null,

    init: function(player) {
        this.winner = player;

    },

    preload: function() {
      game.cache.removeSound('battle');
      game.load.audio('victory', "game/assets/audio/BGM/victory.ogg");
      game.load.image('parchment', 'game/assets/menus/ui/parchmentBackdrop.png');
      game.load.spritesheet("victoryButton", 'game/assets/menus/buttons/victoryStateButtons.png', 193, 71);
  
    },

	create: function() {
      var victoryStyle = {font: "bold 48pt Herculanum", align: "center", fill: "red"};
      var parchment = this.add.image(0, 0, 'parchment');
      var victoryText = game.add.text(150, 220, this.winner + " wins!" , victoryStyle);

      var buttonToMainMenu = new MenuButton(305, 450, "victoryButton", "loadState", null, null, null, null, 0, 0, 1, 0);
      game.add.audio('victory').play();
	},

	update: function() {

	},

}
