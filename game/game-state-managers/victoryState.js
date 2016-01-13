var victoryState = {
    winner: null,

    init: function(player) {
        this.winner = player;

    },

    preload: function() {
      game.cache.removeSound('battle');
      game.load.audio('victory', "game/assets/audio/BGM/victory.ogg")
    },

	create: function() {
      var victoryStyle = {font: "bold 48pt Herculanum", align: "center", fill: "red"};
      var parchment = this.add.image(0, 0, 'parchment');
      var victoryText = game.add.text(150, 220, this.winner + " wins!" , victoryStyle);
      game.add.audio('victory').play();
	},

	update: function() {

	},

}
