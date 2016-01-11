var loadState = {

	preload: function() {
		//TODO: Load assets here
            game.load.audio('menus', 'game/assets/audio/BGM/menus.ogg');
            game.load.audio('battle', 'game/assets/audio/BGM/battle.ogg');
            game.load.audio('move', 'game/assets/audio/SE/move.ogg');
            game.load.audio('coin', 'game/assets/audio/SE/coin.ogg');
            game.load.audio('rifle', 'game/assets/audio/SE/rifle.ogg');
            game.load.audio('capture', 'game/assets/audio/SE/capture.ogg');
            game.load.audio('battleButton', 'game/assets/audio/SE/battleButton.ogg');
            game.load.audio('select', 'game/assets/audio/SE/select.ogg');
            game.load.audio('slash', 'game/assets/audio/SE/slash.ogg');
            game.load.audio('flash', 'game/assets/audio/SE/flash.ogg');

            this.load.image('logo', 'game/assets/logo.jpg');
            this.load.image('parchment', 'game/assets/menus/ui/parchmentBackdrop.png');
            this.load.image('bottomMenuBar', 'game/assets/menus/ui/menuBar.png');
            this.load.image('map1', 'game/assets/menus/images/FW_map_1_thumbnail.png');
            this.load.image('dwarfImage','game/assets/menus/images/dwarfImage.png');
            this.load.image('elfImage','game/assets/menus/images/elfImage.png');
            this.load.image('orcImage','game/assets/menus/images/orcImage.png');

            game.load.spritesheet('dwarvesButton', 'game/assets/menus/buttons/dwarvesButton.png', 224, 71);
            game.load.spritesheet('elvesButton', 'game/assets/menus/buttons/elvesButton.png', 224, 71);
            game.load.spritesheet('orcsButton', 'game/assets/menus/buttons/orcsButton.png', 224, 71);
            game.load.spritesheet('endTurnButton', 'game/assets/menus/ui/endTurnButton.png', 160, 64);
            game.load.spritesheet('endGameButton', 'game/assets/menus/ui/endGameButton.png', 160, 64);
            game.load.spritesheet('turnCountButton', 'game/assets/menus/ui/turnCountButton.png', 160, 64);

            game.load.tilemap("testmap", "game/assets/maps/FW_map_1.json", null, Phaser.Tilemap.TILED_JSON );
            game.load.image("tilesheet", "game/assets/maps/fantasy_wars_tilesheet.png");

            game.load.spritesheet("sprDwarves1", "game/assets/spritesheets/dwarf_units.png", 32, 32);
            game.load.spritesheet("sprDwarves2", "game/assets/spritesheets/dwarf_units2.png", 32, 32);
            game.load.spritesheet("selectionTiles", "game/assets/spritesheets/select_tiles.png", 32, 32);

            game.load.spritesheet("battleButton", "game/assets/menus/ui/battleground_buttons_sheet.png", 193, 71)

            game.load.script('gray', 'game/phaser/filters/Gray.js');
	},

	create: function() {
		game.state.start("mainMenuState");
	}
}
