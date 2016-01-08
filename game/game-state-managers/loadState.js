var loadState = {

	preload: function() {
		//TODO: Load assets here
    this.load.image('logo', 'game/assets/logo.jpg');
    game.load.tilemap("testmap", "game/assets/maps/test_map.json", null, Phaser.Tilemap.TILED_JSON );
	},

	create: function() {
		game.state.start("battleState");
	}
}
