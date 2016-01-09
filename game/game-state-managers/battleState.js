var battleState = {

	create: function() {
		//TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}

    // FOR TESTING PURPOSES
    var tilemap = game.add.tilemap("testmap", 32, 32, 12, 12);
    tilemap.addTilesetImage("tileset", "tilesheet");
    tilemap.createLayer("Tile Layer 1");
    var map = new Map();
	},

	update: function() {
		//TODO: Anything dealing with the battle here
	}

}
