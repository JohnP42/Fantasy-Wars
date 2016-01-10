var mainMenuState = {

	create: function() {
		//TODO: anything needed on menu start up add here
    var logo = this.add.image(0, 0, 'logo');
    logo.width = this.game.width;
    logo.height = this.game.height;
    var menuButton = new MenuButton(528, 200, 'battleButton', "mapSelectState");

	},

	update: function() {
		//TODO: Anything dealing with the main menu here
	}

}
