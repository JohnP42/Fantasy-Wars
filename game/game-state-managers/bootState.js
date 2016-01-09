var bootState = {

	create: function() {
		//TODO: Anything that is needed at boot up
    TILESCALE = 32;
		game.state.start("loadState");
	}
}

