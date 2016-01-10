function GameMenu() {


};

GameMenu.prototype = {

	init: function() {
  	// text(x, y, text, style)
		this.titleText = game.make.text(location.x, location.y, "Fantasy Wars", {fill: 'gold', font: "bold 60pt Helvetica", align: 'center'})
	},

  preload: function() {
  	 game.load.image('background_image', 'assets/logo.jpg');
  },

  create: function() {
	  game.add.sprite(0, 0, 'menu-bg');
	  game.add.existing(this.titleText);

  }
};