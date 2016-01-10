var loadState = {

	preload: function() {
		//TODO: Load assets here
    this.load.image('logo', 'game/assets/logo.jpg');

    game.load.tilemap("testmap", "game/assets/maps/FW_map_1.json", null, Phaser.Tilemap.TILED_JSON );
    game.load.image("tilesheet", "game/assets/maps/fantasy_wars_tilesheet.png");

    game.load.spritesheet("sprDwarves", "game/assets/spritesheets/dwarf_units.png", 32, 32);

    game.load.spritesheet("battleButton", "", 193, 71)
	},

	create: function() {
		game.state.start("menuState");
	}
}
