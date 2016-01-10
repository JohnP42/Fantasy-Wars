var loadState = {

	preload: function() {
		//TODO: Load assets here
    this.load.image('logo', 'game/assets/logo.jpg');
    this.load.image('parchment', 'game/assets/menus/parchment.png')
    this.load.image('map1', 'game/assets/menus/FW_map_1_thumbnail.png')

    game.load.tilemap("testmap", "game/assets/maps/FW_map_1.json", null, Phaser.Tilemap.TILED_JSON );
    game.load.image("tilesheet", "game/assets/maps/fantasy_wars_tilesheet.png");

    game.load.spritesheet("sprDwarves", "game/assets/spritesheets/dwarf_units.png", 32, 32);

    game.load.spritesheet("battleButton", "game/assets/menus/battleground_buttons_sheet.png", 193, 71)
	},

	create: function() {
		game.state.start("mainMenuState");
	}
}
