var mainMenuState = {

	create: function() {
		//TODO: anything needed on menu start up add here
        var bgm = game.add.audio('menus');
        var logo = this.add.image(0, 0, 'logo');
        logo.width = this.game.width;
        logo.height = this.game.height;

        var menuButton = new MenuButton(528, 200, 'battleButton', "mapSelectState", "", "", "battleButton");
        // this.sound.setDecodedCallback(bgm, this.start, this);
        bgm.play();
	},

	update: function() {
		//TODO: Anything dealing with the main menu here
	},

}
