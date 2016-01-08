var battleState = {

	create: function() {
		//TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}
    var map = game.add.tilemap("testmap", 32, 32, 12, 12);
    map.addTilesetImage("tileset", "tilesheet");
    map.createLayer("Tile Layer 1");
	},

	update: function() {
		//TODO: Anything dealing with the battle here
	}

}
