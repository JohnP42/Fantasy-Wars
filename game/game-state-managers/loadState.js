var loadState = {

	preload: function() {
		//TODO: Load assets here
    game.load.audio('menus', 'game/assets/audio/BGM/menus.ogg');
    game.load.audio('battle', 'game/assets/audio/BGM/battle.ogg')
    this.load.image('logo', 'game/assets/logo.jpg');

    game.load.tilemap("testmap", "game/assets/maps/FW_map_1.json", null, Phaser.Tilemap.TILED_JSON );
    game.load.image("tilesheet", "game/assets/maps/fantasy_wars_tilesheet.png");

    game.load.spritesheet("sprDwarves1", "game/assets/spritesheets/dwarf_units.png", 32, 32);
    game.load.spritesheet("sprDwarves2", "game/assets/spritesheets/dwarf_units2.png", 32, 32);

    game.load.spritesheet("battleButton", "game/assets/menus/battleground_buttons_sheet.png", 193, 71)

    game.load.script('gray', 'game/phaser/filters/Gray.js');
	},

	create: function() {
		game.state.start("mainMenuState");
	}
}
