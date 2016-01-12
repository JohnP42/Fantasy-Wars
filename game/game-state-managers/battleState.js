var battleState = {

    init: function(mapKey, armyKey, audio) {
        this.mapKey = mapKey;
        this.armyKey = armyKey;
    	map: null;
    	battle: null;
        var currentUnitHealth = null;
        var currentUnitAttack = null;
        var currentUnitDefense = null;
        var currentUnitSpeed = null;
    },

    preload: function() {
      game.cache.removeSound('menus');
    },

	create: function() {
    //TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}

        // setup battle assets

        game.world.setBounds(0, -64, 1000, 1000);
        game.camera.y = -64;

        var bgm = game.add.audio('battle');
        var tilemap = game.add.tilemap("testmap", 32, 32, 8, 12);
        var tileset = tilemap.addTilesetImage("FW_Set", "tilesheet");
        var mainMap = tilemap.createLayer("Tile Layer 1");
        map = new Map();

        moveHighlights = game.add.group();
        attackHighlights = game.add.group();

        // army 1

        var army = [new Grenadier(new Pos(2, 2), 1),
        new Warrior(new Pos(1, 3), 1),
        new Mech(new Pos(1, 2), 1),
        new Mortar(new Pos(1, 1), 1),
        new Biplane(new Pos(5, 1), 1)];

        // army 2

        var army2 = [new Grenadier(new Pos(5, 10), 2),
        new MotorBike(new Pos(0, 10), 2),
        new IronGuard(new Pos(6, 10), 2),
        new Cannon(new Pos(6, 11), 2),];

        // create battle

        battle = new Battle(map,[new Player(new ArmyDwarf(army)), new Player(new ArmyDwarf(army2))]);
        //top menu bar

        var style = {font: "21pt Herculanum", align: "left", fill: "white"};
        var topMenuBar = game.add.image(0, -64, 'topMenuBar');
        var currentPlayerText = game.add.text(20, -47, "Player " + battle.currentPlayer, style);
        var currentPlayerGold = game.add.text(550, -47, "Gold: " + battle.currentPlayer.goldCount, style);

        // bottom menu bar

        var bottomMenuBar = game.add.image(0, 482, 'bottomMenuBar');
        var turnCountButton = game.add.button(0, 482, 'turnCountButton');
        var turnCount = game.add.text(20, game.height - 108, "Turn: " + battle.turn, style);
        var endGameButton = game.add.button(320, 482, 'endGameButton', function() {
            game.state.start("mainMenuState");
        });

        //Add End Turn Button
        var button = game.add.button(160, 482, 'endTurnButton', function() {
            if (battle.currentPlayer === 1) {
                battle.players[0].endTurn();
                battle.currentPlayer = 2;
                var style = { font: "65px Arial", fill: "#0000FF", align: "center" };
                var text = game.add.text(game.world.centerX, game.world.centerY - 300, "Player 2 Turn", style);
                text.anchor.set(0.5);
                text.alpha = 1;
                var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
            } else {
                battle.players[1].endTurn();
                battle.currentPlayer = 1;
                var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
                var text = game.add.text(game.world.centerX , game.world.centerY - 300, "Player 1 Turn", style);
                text.anchor.set(0.5);
                text.alpha = 1;
                var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
                battle.turn ++;
                turnCount.setText("Turn: " + battle.turn);
            };
            currentPlayerText.setText("Player " + battle.currentPlayer);
            currentPlayerGold.setText("Gold: " + battle.currentPlayer.goldCount);
        });

        // stats menu

        var statsStyle = {font: "16pt Herculanum", align: "left", fill: "white"};

        var statsMenu = game.add.image(576, 353, 'statsMenu');

        currentUnitHealth = game.add.text(596, 373, "Health:     ", statsStyle);
        currentUnitAttack = game.add.text(596, 413, "Attack:     ", statsStyle);
        currentUnitDefense = game.add.text(596, 453, "Defense:     ", statsStyle);
        currentUnitSpeed = game.add.text(596, 493, "Speed:     ", statsStyle);

        bgm.play();
    },

    update: function() {
        //TODO: Anything dealing with the battle here
        battle.update();

        if (battle.currentSelectedUnit !== null) {

            currentUnitHealth.setText("Health:     " + battle.currentSelectedUnit.getHealthNumber());
            currentUnitAttack.setText("Attack:     " + battle.currentSelectedUnit.attack);
            currentUnitDefense.setText("Defense:     " + battle.currentSelectedUnit.getDefenseAsPercent());
            currentUnitSpeed.setText("Speed:     " + battle.currentSelectedUnit.speed);

        }
    },

    render: function() {
        // battle.getSelectedMoves().forEach(function(tileRect) {

        // });

        // battle.getSelectedAttacks().forEach(function(tileRect) {
        //   game.debug.geom(tileRect,'rgba(200, 50, 50, 0.5');
        // });
    }
}

