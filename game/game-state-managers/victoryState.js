var victoryState = {
    winner: null,

    init: function(player) {
        winner = player;
      
    },

	create: function() {
        var victoryStyle = {font: "bold 48pt Herculanum", align: "center", fill: "red"};
        var parchment = this.add.image(0, 0, 'parchment');
        var victoryText = game.add.text(150, 220, "Player " + this.winner + " wins!" , victoryStyle);
        game.add.audio('victory').play();
	},

	update: function() {

	},

}
