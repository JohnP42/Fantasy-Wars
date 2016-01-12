var battleState = {
    init: function(mapKey, armyKey, audio) {
        this.mapKey = mapKey;
        this.armyKey = armyKey;
    	map = null;
    	battle = null;

        _initializeVariables();
    },

    preload: function() {
        game.cache.removeSound('menus');
        game.load.audio('battle', 'game/assets/audio/BGM/battle.ogg');
    },

	create: function() {
    //TODO: anything needed on battle start add here
    // tilemap(key, tileWidth, tileHeight, width, height) → {Phaser.Tilemap}

        // Position camera to add top margin to map
        game.world.setBounds(0, -64, 1000, 1000);
        game.camera.y = -64;

        _playSound('battle');

        var tilemap = game.add.tilemap(this.mapKey, 32, 32, 8, 12);
        var tileset = tilemap.addTilesetImage("FW_Set", "tilesheet");
        var mainMap = tilemap.createLayer("Tile Layer 1");
        map = new Map();

        moveHighlights = game.add.group();
        attackHighlights = game.add.group();

        // Initialize player armies
        var army = _initializeArmyPlayer1();
        var army2 = _initializeArmyPlayer2();

        // create battle
        battle = new Battle(map,[new Player(new ArmyDwarf(army)), new Player(new ArmyDwarf(army2))]);
        // Setup Menu UI
        _setupUIElements(battle);
    },

    update: function() {
        //TODO: Anything dealing with the battle here
        battle.update();

        if (battle.currentSelectedUnit !== null) {
            currentUnitHealth.setText("Health:     " + battle.currentSelectedUnit.getHealthNumber());
            currentUnitAttack.setText("Attack:     " + battle.currentSelectedUnit.attack);
            currentUnitDefense.setText("Defense:     " + battle.currentSelectedUnit.getDefenseAsPercent());
            currentUnitSpeed.setText("Speed:     " + battle.currentSelectedUnit.speed);
            currentUnitRange.setText("Range:     " + battle.currentSelectedUnit.range[0] + "-" + battle.currentSelectedUnit.range[1]);
        }

        // TODO : at stuff from current selected tile
        if (battle.currentSelectedTile != null) {
            var defense = parseFloat(battle.currentSelectedTile.protection);
            currentTileName.setText("Name: " + battle.currentSelectedTile.name );
            currentTileDefense.setText("Defense: " + (defense * 100) + "%");
            currentTileInfMov.setText("Infantry Cost: "  + battle.currentSelectedTile.movCostInf );
            currentTileCavMov.setText("Cavalry Cost: "  + battle.currentSelectedTile.movCostCav );
            currentTileArtMov.setText("Artillery Cost: "  + battle.currentSelectedTile.movCostArt );
            currentTileFlyMov.setText("Fly Cost: "  + battle.currentSelectedTile.movCostFly );
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

function _initializeVariables() {
    var currentUnitHealth = null;
    var currentUnitAttack = null;
    var currentUnitDefense = null;
    var currentUnitSpeed = null;

    var currentTileName = null;
    var currentTileDefense = null;
    var currentTileInfMov = null;
    var currentTileCavMov = null;
    var currentTileArtMov = null;
    var currentTileFlyMov = null;
};

function _playSound(audioKey) {
  var bgm = game.add.audio(audioKey);
  bgm.play();
};

function _initializeArmyPlayer1() {
  return [new Grenadier(new Pos(2, 2), 1),
        new Warrior(new Pos(1, 3), 1),
        new Mech(new Pos(1, 2), 1),
        new Mortar(new Pos(1, 1), 1),
        new Biplane(new Pos(5, 1), 1)];
};

function _initializeArmyPlayer2() {
  return [new Grenadier(new Pos(5, 10), 2),
        new MotorBike(new Pos(0, 10), 2),
        new IronGuard(new Pos(6, 10), 2),
        new Cannon(new Pos(6, 11), 2),];
};

function _setupUIElements(battle) {
    userInterfaceText = _createTopMenuBar(battle);
    bottomInterfaceText = _createBottomMenuBar(battle);
    _createSpriteAnimationCloseUp(battle);
    _createStatsMenu(battle);
    _createTerrainMenu(battle);
    _createEndTurnButton(battle, userInterfaceText, bottomInterfaceText);
};

function _createTopMenuBar(battle) {
    var style = {font: "21pt Herculanum", align: "left", fill: "white"};
    var topMenuBar = game.add.image(0, -64, 'topMenuBar');
    var currentPlayerText = game.add.text(20, -47, "Player " + battle.currentPlayer, style);
    var currentPlayerGold = game.add.text(550, -47, "Gold: " + battle.currentPlayer.goldCount, style);
    return {"currentPlayerText": currentPlayerText, "currentPlayerGold": currentPlayerGold};
};

function _createBottomMenuBar(battle) {
    var style = {font: "21pt Herculanum", align: "left", fill: "white"};
    var bottomMenuBar = game.add.image(0, 476, 'bottomMenuBar');
    var turnCountButton = game.add.button(0, 476, 'turnCountButton');
    var turnCount = game.add.text(20, game.height - 106, "Turn: " + battle.turn, style);
    var endGameButton = game.add.button(320, 476, 'endGameButton', function() {
        if (window.confirm("Is it ok to end the game?")) {
            game.cache.removeSound('battle');
            game.state.start("mainMenuState");
        };
    });
    return {"turnCount": turnCount};
};

function _createSpriteAnimationCloseUp(battle) {
    var spriteAnimationBackdrop = game.add.image(576, 162, 'statsMenu');
    var currentSprite = battle.currentSelectedUnit

    // if (currentSprite) {
    //     var spriteCloseUp = game.add.copyCurrentSprite.play("stand", 60, true);
    // }
};

function _createStatsMenu(battle) {
    var statsStyle = {font: "14pt Herculanum", align: "left", fill: "white"};
    var statsMenu = game.add.image(576, 353, 'statsMenu');

    currentUnitHealth = game.add.text(596, 373, "Health:     ", statsStyle);
    currentUnitAttack = game.add.text(596, 403, "Attack:     ", statsStyle);
    currentUnitDefense = game.add.text(596, 433, "Defense:     ", statsStyle);
    currentUnitSpeed = game.add.text(596, 463, "Speed:     ", statsStyle);
    currentUnitRange = game.add.text(596, 493, "Range:  ", statsStyle);

    var spriteAnimationBackdrop = game.add.image(576, 162, 'statsMenu');
};

function _createTerrainMenu(battle) {
    var terrainStatsStyle = {font: "14pt Herculanum", align: "left", fill: "white"};
    var terrainStatsMenu = game.add.image(576, 0, 'statsMenu');

    currentTileName = game.add.text(596, 20, "Name:  ", terrainStatsStyle);
    currentTileDefense = game.add.text(596, 45, "Defense:  ", terrainStatsStyle);
    currentTileInfMov = game.add.text(596, 72, "Infantry Cost:  ", terrainStatsStyle);
    currentTileCavMov = game.add.text(596, 99, "Cavalry Cost:  ", terrainStatsStyle);
    currentTileArtMov = game.add.text(596, 127, "Artillery Cost:  ", terrainStatsStyle);
    currentTileFlyMov = game.add.text(596, 153, "Fly Cost:  ", terrainStatsStyle);
};

function _createEndTurnButton(battle, userInterfaceText) {
    var turnCount = bottomInterfaceText["turnCount"];
    // unpack user interface text
    currentPlayerText = userInterfaceText["currentPlayerText"];
    currentPlayerGold = userInterfaceText["currentPlayerGold"];
    var button = game.add.button(160, 476, 'endTurnButton', function() {
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
};
