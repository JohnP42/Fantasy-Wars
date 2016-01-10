var loadState = {

	preload: function() {
		//TODO: Load assets here
    this.load.image('logo', 'game/assets/logo.jpg');

    game.load.tilemap("testmap", "game/assets/maps/FW_map_1.json", null, Phaser.Tilemap.TILED_JSON );
    game.load.image("tilesheet", "game/assets/maps/fantasy_wars_tilesheet.png");

    game.load.spritesheet("sprDwarves", "game/assets/spritesheets/dwarf_units.png", 32, 32);

    game.load.spritesheet("battleButton", "game/assets/menus/battleground_buttons_sheet.png", 193, 71)

    game.load.script('gray', 'game/phaser/filters/Gray.js');
	},

	create: function() {
		game.state.start("mainMenuState");
	}
}
