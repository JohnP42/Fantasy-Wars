var loadState = {

	preload: function() {
		//TODO: Load assets here
    this.load.image('logo', 'game/assets/logo.jpg');
	},

	create: function() {
		game.state.start("menuState");
	}
}