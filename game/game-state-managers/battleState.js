var battleState = {

	map: null,
	battle: null,

	create: function() {
		//TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}

    // FOR TESTING PURPOSES
    var tilemap = game.add.tilemap("testmap", 32, 32, 12, 12);
    tilemap.addTilesetImage("tileset", "tilesheet");
    tilemap.createLayer("Tile Layer 1");
    map = new Map();
    var army = [new Grenadier(new Position(2, 2)), 
    new Warrior(new Position(1, 3)), 
    new Mech(new Position(1, 2)), 
    new MotorBike(new Position(0, 8)), 
    new IronGuard(new Position(3, 3)), 
    new Cannon(new Position(3, 2)), 
    new Mortar(new Position(1, 1)), 
    new Biplane(new Position(10, 1))];
    battle = new Battle(map,[new Player(new ArmyDwarf(army)), new Player(new ArmyDwarf([]))]);
	
	},

	update: function() {
		//TODO: Anything dealing with the battle here
		battle.update();
	}

}
