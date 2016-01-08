var loadState = {

	preload: function() {
		//TODO: Load assets here
    this.load.image('logo', 'game/assets/logo.jpg');
    game.load.tilemap("testmap", "game/assets/maps/test_map.json", null, Phaser.Tilemap.TILED_JSON );
    game.load.image("tilesheet", "game/assets/maps/example_tilesheet_2.png");
	},

	create: function() {
		game.state.start("battleState");
	}
}
