var victoryState = {

	create: function() {

            var victoryStyle = {font: "bold 48pt Herculanum", align: "center"};
            var victoryBackGround = game.add.image(0, 0, "parchment");
            var victoryText = game.add.text(300, 320, "Player" + battle.currentPlayer, victoryStyle);
	},

	update: function() {

	},

}
