var battleState = {

    init: function(mapKey, armyType) {
        this.mapKey = mapKey;
        this.armyType = armyType;
    	map: null;
    	battle: null;
    },

    preload: function() {
      game.cache.removeSound('menus');
    },

	create: function() {
    //TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}

    // FOR TESTING PURPOSE
    // TODO: change "testmap" to mapKey
    //       implement armyType to get correct army units

        var bgm = game.add.audio('battle');
        var tilemap = game.add.tilemap("testmap", 32, 32, 8, 12);
        tilemap.addTilesetImage("FW_Set", "tilesheet");
        tilemap.createLayer("Tile Layer 1");
        map = new Map();
        var army = [new Grenadier(new Pos(2, 2), 1),
        new Warrior(new Pos(1, 3), 1),
        new Mech(new Pos(1, 2), 1),
        new Mortar(new Pos(1, 1), 1),
        new Biplane(new Pos(5, 1), 1)];

        var army2 = [new Grenadier(new Pos(5, 10), 2),
        new MotorBike(new Pos(0, 10), 2),
        new IronGuard(new Pos(6, 10), 2),
        new Cannon(new Pos(6, 11), 2),];

        battle = new Battle(map,[new Player(new ArmyDwarf(army)), new Player(new ArmyDwarf(army2))]);

    //Add End Turn Button
    button = game.add.button(160, 536, 'endTurnButton', function() {
        if (battle.currentPlayer === 1) {
            battle.players[0].endTurn();
            battle.currentPlayer = 2;
            var style = { font: "65px Arial", fill: "#0000FF", align: "center" };
            var text = game.add.text(game.world.centerX, game.world.centerY, "Player 2 Turn", style);
            text.anchor.set(0.5);
            text.alpha = 1;
            var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
        } else {
            battle.players[1].endTurn();
            battle.currentPlayer = 1;
            var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
            var text = game.add.text(game.world.centerX, game.world.centerY, "Player 1 Turn", style);
            text.anchor.set(0.5);
            text.alpha = 1;
            var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
        };
    });

    bgm.play();
    },

    update: function() {
        //TODO: Anything dealing with the battle here
        battle.update();
    },

    render: function() {
        battle.getSelectedMoves().forEach(function(tileRect) {
            game.debug.geom(tileRect,'rgba(50,150,200,0.5');
        });
    }
}

