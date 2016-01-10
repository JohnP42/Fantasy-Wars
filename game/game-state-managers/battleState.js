var battleState = {

	map: null,
	battle: null,

	create: function() {
		//TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}

    // FOR TESTING PURPOSES
    var tilemap = game.add.tilemap("testmap", 32, 32, 8, 12);
    tilemap.addTilesetImage("tileset", "tilesheet");
    tilemap.createLayer("Tile Layer 1");
    map = new Map();
    var army = [new Grenadier(new Pos(2, 2)),
    new Warrior(new Pos(1, 3)),
    new Mech(new Pos(1, 2)),
    new MotorBike(new Pos(0, 8)),
    new IronGuard(new Pos(3, 3)),
    new Cannon(new Pos(3, 2)),
    new Mortar(new Pos(1, 1)),
    new Biplane(new Pos(10, 1))];
    battle = new Battle(map,[new Player(new ArmyDwarf(army)), new Player(new ArmyDwarf([]))]);

	},

	update: function() {
		//TODO: Anything dealing with the battle here
		battle.update();
	},

    render: function() {
        // battle.showSelectedMoves().forEach(function(tileRect) {
        //     game.debug.geom(tileRect,'rgba(0,0,255,0.5');
        // });
    }

}
