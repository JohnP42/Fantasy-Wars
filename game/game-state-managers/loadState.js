var loadState = {

	preload: function() {
		// Load Assets
            _loadAudio();
            _loadImages();
            _loadSpritesheets();
            _loadScripts();
	},

	create: function() {
		// game.state.start("victoryState", true, false, "1");
            game.state.start("mainMenuState");
	}
}

function _loadAudio() {
      game.load.audio('move', 'game/assets/audio/SE/move.ogg');
      game.load.audio('coin', 'game/assets/audio/SE/coin.ogg');
      game.load.audio('rifle', 'game/assets/audio/SE/rifle.ogg');
      game.load.audio('capture', 'game/assets/audio/SE/capture.ogg');
      game.load.audio('battleButton', 'game/assets/audio/SE/battleButton.ogg');
      game.load.audio('select', 'game/assets/audio/SE/select.ogg');
      game.load.audio('slash', 'game/assets/audio/SE/slash.ogg');
      game.load.audio('flash', 'game/assets/audio/SE/flash.ogg');
      game.load.audio('bow', 'game/assets/audio/SE/bow.ogg');
      game.load.audio('cannonShot', 'game/assets/audio/SE/Explosion4.ogg');
      game.load.audio('mortarShot', 'game/assets/audio/SE/Explosion7.ogg');
      game.load.audio('machineGun', 'game/assets/audio/SE/machineGun.ogg');
};

function _loadImages() {
      game.load.image('logo', 'game/assets/logo.jpg');
      game.load.image('parchment', 'game/assets/menus/ui/parchmentBackdrop.png');
      game.load.image('bottomMenuBar', 'game/assets/menus/ui/menuBar.png');
      game.load.image('topMenuBar', 'game/assets/menus/ui/topMenuBar.png');
      game.load.image('statsMenu', 'game/assets/menus/ui/statsMenu.png');
      game.load.image('map1', 'game/assets/menus/images/FW_map_1_thumbnail.png');
      game.load.image('dwarfImage','game/assets/menus/images/dwarfImage.png');
      game.load.image('elfImage','game/assets/menus/images/elfImage.png');
      game.load.image('orcImage','game/assets/menus/images/orcImage.png');
};

function _loadSpritesheets() {
      game.load.spritesheet('dwarvesButton', 'game/assets/menus/buttons/dwarvesButton.png', 224, 71);
      game.load.spritesheet('elvesButton', 'game/assets/menus/buttons/elvesButton.png', 224, 71);
      game.load.spritesheet('orcsButton', 'game/assets/menus/buttons/orcsButton.png', 224, 71);
      game.load.spritesheet('endTurnButton', 'game/assets/menus/buttons/endTurnButton.png', 160, 64);
      game.load.spritesheet('endGameButton', 'game/assets/menus/buttons/endGameButton.png', 160, 64);
      game.load.spritesheet('turnCountButton', 'game/assets/menus/buttons/turnCountButton.png', 160, 64);

      game.load.tilemap("testmap", "game/assets/maps/FW_map_1.json", null, Phaser.Tilemap.TILED_JSON );
      game.load.image("tilesheet", "game/assets/maps/fantasy_wars_tilesheet.png");

      game.load.spritesheet("sprDwarves1", "game/assets/spritesheets/dwarf_units.png", 32, 32);
      game.load.spritesheet("sprDwarves2", "game/assets/spritesheets/dwarf_units2.png", 32, 32);
      game.load.spritesheet("selectionTiles", "game/assets/spritesheets/select_tiles.png", 32, 32);

      game.load.spritesheet("battleButton", "game/assets/menus/buttons/battlegroundButton.png", 193, 71);
      game.load.spritesheet("campaignButton", "game/assets/menus/buttons/campaignButton.png", 193, 71);
      game.load.spritesheet("instructionsButton", "game/assets/menus/buttons/instructionsButton.png", 193, 71);
};

function _loadScripts() {
      game.load.script('gray', 'game/phaser/filters/Gray.js');
};
