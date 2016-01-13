function Battle(map, players) {
  this.map = map;
  this.players = players;
  this.turn = 1;
  this.currentSelectedUnit = null;
  this.currentSelectedMovement = [];
  this.currentSelectedAttacks = [];
  this.currentSelectedTile = null;
  this.currentCaptureTile = null;
  this.turnState = "selectingUnit";
  this.canClick = true;
  this.currentPlayer = 1;
  this.buildScreen = null;
};

Battle.prototype.update = function() {
  for (var i = 0; i < this.players.length; i++) {
  	this.players[i].update(this.map, this.turn === i + 1)
  }
  if(this.turnState === "animatingMovement") {
    this.animateMovement();
  }
  else if (this.turnState === "animatingAttack"){
    this.animateAttack();
  }
  else {
    this.onClickListener();
  }

  if(this.turnState !== "selectingMove") {
    moveHighlights.removeChildren();
  }

  if(this.turnState !== "selectingAttack" && this.turnState !== "capturePrompt") {
    attackHighlights.removeChildren();
  }
  this.checkVictoryConditions();
};

Battle.prototype.getUnitAtPos = function(pos) {
  // Retrieves Unit at given pos
  finalUnit = null;
  this.players.forEach(function(player) {
    player.army.units.forEach(function(unit) {
      if (unit.pos.equals(pos)) {
         finalUnit = unit;
      };
    });
  });
  return finalUnit;
};

Battle.prototype.onClickListener = function() {
  // Retrieve tile at a given pos
  if(game.input.activePointer.leftButton.isDown && this.canClick) {
    // calculate tile on which mouse click happens
    var mousePos = new Pos(Math.floor(game.input.activePointer.worldX / TILESCALE), Math.floor(game.input.activePointer.worldY / TILESCALE));
    this.canClick = false;

    if(this.turnState !== "buildUnit") {
      this.currentSelectedTile = this.map.getTileAtPos(mousePos);
    }

    if(this.turnState === "selectingUnit") {
      this._clickListenerTurnStateSelectingUnitHelper(mousePos);
    }
    else if(this.turnState === "selectingMove") {
      this._clickListenerTurnStateSelectingMoveHelper(mousePos);
    }
    else if(this.turnState === "selectingAttack") {
      this._clickListenerTurnStateSelectingAttackHelper(mousePos);
    }
    else if (this.turnState === "capturePrompt") {
      this._clickListenerTurnStateCapturePromptHelper(mousePos);
    }
    else if (this.turnState === "buildUnit") {
      this._clickListenerTurnStateBuildUnitHelper(mousePos);
    }
  }

  if (game.input.activePointer.leftButton.isUp) {
    this.canClick = true;
  }
};

Battle.prototype.tileIsBuilding = function(tile) {
  return (tile.name === "castle" || tile.name === "barracks" || tile.name === "town");
}

Battle.prototype.animateMovement = function() {
  var prevPosX = this.currentSelectedUnit.pos.x;
  var prevPosY = this.currentSelectedUnit.pos.y;

  if (this.currentSelectedUnit.move()) {
    var that = this;
    this.turnState = "selectingAttack";
    this.currentSelectedMovement = [];
    this.currentSelectedAttacks = this.currentSelectedUnit.getPossibleAttacks(this.map);
    var enemyInRange = false;
    this.enemyPositions().forEach(function(pos) {
      if (that.arrayIncludesPosition(that.currentSelectedAttacks, pos)) {
        enemyInRange = true
        if (that.getUnitAtPos(pos) instanceof UnitFlying && that.currentSelectedUnit.range[1] === 1) {
          enemyInRange = false;
        }
      }
    });

    var unit = that.currentSelectedUnit;
    var movedThisPhase = (this.currentSelectedUnit.pos.x !== prevPosX || this.currentSelectedUnit.pos.y !== prevPosY)
    if(!enemyInRange || (this.currentSelectedUnit instanceof UnitArtillery && movedThisPhase)) {
      that.turnState = "selectingUnit";
        that.currentSelectedUnit = null;
        that.currentSelectedMovement = [];
        that.currentSelectedAttacks = [];
    }

    if(this.tileIsBuilding(this.currentSelectedTile) && unit instanceof UnitInfantry) {
      if(this.currentSelectedTile.owner !== this.currentPlayer) {
        this.currentSelectedUnit = unit;
        that.turnState = "capturePrompt";
        that.currentSelectedMovement = [];
        that.currentCaptureTile = this.currentSelectedTile;
      }
    }

    this.renderAttackHighlights();
  }
};

Battle.prototype.animateAttack = function() {
  if (this.currentSelectedUnit.attackAnim()) {
    this.turnState = "selectingUnit";
    this.currentSelectedUnit.attacking = false;
    this.currentSelectedUnit = null;
    this.currentSelectedMovement = [];
    this.currentSelectedAttacks = [];
  }
};

Battle.prototype.getMoveAtPos = function(mousePos) {
  // detects if target position is valid; if yes, returns position, otherwise null
  finalSquare = null;
  this.currentSelectedMovement.forEach(function(pos) {
    if (mousePos.equals(pos))
      finalSquare = pos;
  });
  return finalSquare;
};

Battle.prototype.getUnitToAttackAtPos = function(mousePos) {
  // detects if target position is valid; if yes, returns position, otherwise null
  finalSquare = null;
  this.currentSelectedAttacks.forEach(function(pos) {
    if (mousePos.equals(pos))
      finalSquare = pos;
  });

  return finalSquare === null ? null : this.getUnitAtPos(finalSquare);
};

Battle.prototype.renderMoveHighlights = function() {
  // parses Unit.getPossibleMoves for filtering (color/selection) - applies filter/rectangle
  var positions = this.currentSelectedMovement.slice();

  positions.forEach(function(pos) {
    moveHighlights.create(pos.canvasX(), pos.canvasY(), "selectionTiles", 0)
  });
  moveHighlights.callAll("animations.add", "animations", "move", [0, 1, 2], 4, true);
  moveHighlights.callAll("animations.play", "animations", "move");
};

Battle.prototype.renderAttackHighlights = function() {
  // parses Unit.getPossibleAttacks for filtering (color/selection) - applies filter/rectangle
  var positions = this.currentSelectedAttacks.slice();

  positions = positions.map(function(pos) {
    attackHighlights.create(pos.canvasX(), pos.canvasY(), "selectionTiles", 10)
  });
  attackHighlights.callAll("animations.add", "animations", "attack", [3, 4, 5], 4, true);
  attackHighlights.callAll("animations.play", "animations", "attack");
};

Battle.prototype.getTileAtPos = function(pos) {
  // Retrieve tile at a given pos
  return this.map.getTileAtPos(pos);
};

Battle.prototype.switchTurn = function() {
  //TODO: Switches turn to next player or starts game
};

Battle.prototype.enemyPositions = function() {
  return this.players[this.players.length - (this.currentPlayer - 1) -1].unitPositions();
}

Battle.prototype.arrayIncludesPosition = function(array, pos) {
  var included = false;
  array.forEach(function(item) {
    if(pos.equals(item)) {
      included = true;
      return;
    }
  });
  return included;
}

Battle.prototype.unitCombat = function(unit1, unit2, terrainDefense) {
  var dmg = 0;

  if (unit2 instanceof UnitFlying) {
    dmg = unit2.takeDamage(unit1.getAttackDamage(unit2.defense, 0));
  }
  else {
    dmg = unit2.takeDamage(unit1.getAttackDamage(unit2.defense, terrainDefense));
  }
  this._displayDamageTaken(dmg, unit2, unit1);

  if(terrainDefense === 0 && unit2.range[0] === 1 && unit2.getHealthNumber() > 0) {
    if (unit1 instanceof UnitFlying) {
      dmg = unit1.takeDamage(unit2.getAttackDamage(unit1.defense, 0));
    }
    else {
      dmg = unit1.takeDamage(unit2.getAttackDamage(unit1.defense, terrainDefense));
    }
    this._displayDamageTaken(dmg, unit1, unit2);
  }
};

Battle.prototype._clickListenerTurnStateSelectingAttackHelper = function(mousePos) {
  // if the selected move is valid, state becomes animation state, otherwise deselect unit
    var unitToAttack = this.getUnitToAttackAtPos(mousePos);

    if (unitToAttack === null || unitToAttack.player === this.currentSelectedUnit.player) {
      this.turnState = "selectingUnit";
      this.currentSelectedUnit = null;
      this.currentSelectedAttack = [];
    }
    else {
      this.turnState = "animatingAttack";
      this.currentSelectedUnit.attacking = true;
      this.currentSelectedUnit.animations.play("attack");
      if (this.currentSelectedUnit.distanceTo(unitToAttack.pos) === 1) {
        this.unitCombat(this.currentSelectedUnit, unitToAttack, 0);
      }
      else {
        this.unitCombat(this.currentSelectedUnit, unitToAttack, this.map.getTileAtPos(unitToAttack.pos).protection);
      }
      this.currentSelectedAttack = [];
      if(this.currentSelectedUnit.alive === false) {
        this.currentSelectedUnit.attackSound.play();
        unitToAttack.attackSound.play();
        this.turnState = "selectingUnit";
        this.currentSelectedUnit.attacking = false;
        this.currentSelectedUnit = null;
        this.currentSelectedMovement = [];
        this.currentSelectedAttacks = [];
      }
    }
};

Battle.prototype._clickListenerTurnStateSelectingMoveHelper = function(mousePos) {
  // if the selected move is valid, state becomes animation state, otherwise deselect unit
  var squareToMoveTo = this.getMoveAtPos(mousePos);
  var unitAtPos = this.getUnitAtPos(mousePos);
  if (squareToMoveTo === null || (unitAtPos !== null && unitAtPos !== this.currentSelectedUnit)) {
    this.turnState = "selectingUnit";
    this.currentSelectedUnit = null;
    this.currentSelectedMovement = [];
  } else {
    if (!this.currentSelectedUnit.movedThisTurn && this.currentSelectedUnit.player === this.currentPlayer) {
      this.turnState = "animatingMovement";
      this.currentSelectedUnit.walkPath = squareToMoveTo.getPath();
    }
    else {
      this.turnState = "selectingUnit";
      this.currentSelectedUnit = null;
      this.currentSelectedMovement = [];
    };
  };
};

Battle.prototype._clickListenerTurnStateCapturePromptHelper = function(mousePos) {
  if(this.getTileAtPos(mousePos) === this.currentCaptureTile) {
    var capturePoints = this.currentCaptureTile.capturePoints;
    capturePoints = parseInt(capturePoints) + this.currentSelectedUnit.getHealthNumber();
    this.currentCaptureTile.capturePoints = capturePoints.toString();

    if(capturePoints >= 20) {
      this.currentCaptureTile.owner = this.currentPlayer;
      this.currentCaptureTile.capturePoints = "0";
      game.add.audio("complete").play();
    }
    else {
      game.add.audio("capture").play();
    }

    this.turnState = "selectingUnit";
    this.currentSelectedUnit = null;
    this.currentSelectedMovement = [];
    this.currentSelectedAttacks = [];
  }
  else {
    this._clickListenerTurnStateSelectingAttackHelper(mousePos);
  }
  this.currentCaptureTile = null;
};

Battle.prototype._clickListenerTurnStateSelectingUnitHelper = function(mousePos) {
  unit = this.getUnitAtPos(mousePos);
  if(unit) {
    if(this.currentSelectedUnit !== unit) {
      this.currentSelectedUnit = unit;
      // get possible moves
      this.currentSelectedMovement = this.currentSelectedUnit.getPossibleMoves(this.currentSelectedUnit.pos, this.map, this.enemyPositions());
      this.turnState = "selectingMove";
      this.renderMoveHighlights();
    };
  }
  else {
    this.clickOnBarracks(mousePos);
  }
};

Battle.prototype._clickListenerTurnStateBuildUnitHelper = function(mousePos) {
  var unit = this.buildScreen.onClick(mousePos);
  console.log(unit);
  if(unit) {
    unit.movedThisTurn = true;
    var gray = game.add.filter('Gray');
    unit.filters = [gray];
    this.getCurrentPlayer().army.units.push(unit);
  }

  this.buildScreen = this.buildScreen.destroy();
  this.turnState = "selectingUnit";
  this.currentSelectedUnit = null;
};

Battle.prototype.clickOnBarracks = function(mousePos) {
  if (this.currentSelectedTile) {
    if (this.currentSelectedTile.name === "barracks" && this.currentSelectedTile.owner === this.currentPlayer) {
      this.turnState = "buildUnit";
      this.buildScreen = new BuildScreen(this.getCurrentPlayer().army.armyList, this, mousePos);
    }
  }
}

Battle.prototype.addGold = function() {
  var that = this;
  this.map.getAllBuildingsForPlayer(this.currentPlayer).forEach(function(building) {
    that.getCurrentPlayer().gold += 100;
  });
}

Battle.prototype.getCurrentPlayer = function() {
  return this.players[this.currentPlayer - 1];
}

Battle.prototype._displayDamageTaken = function(dmg, unit1, unit2) {
  var style = { font: "12px Arial", backgroundColor: "red", fill: "#ffffff", align: "center" };
  var text = game.add.text(unit1.pos.canvasX() + 16, unit1.pos.canvasY(), ("-" + dmg), style);
  text.anchor.set(0.5);
  text.alpha = 1;
  var tween = game.add.tween(text).to( { alpha: 0, y: unit1.pos.canvasY() - 20 }, 1000, "Linear", true);
}

Battle.prototype.checkVictoryConditions = function() {
  if (this.checkLosingConditionsforPlayer(this.players[0]) === true) {
      game.state.start("victoryState", true, false, "Player 2");
  }
  else if (this.checkLosingConditionsforPlayer(this.players[1]) === true) {
      game.state.start("victoryState", true, false, "Player 1");
  }
  else {
    return false;
  }
}

Battle.prototype.checkLosingConditionsforPlayer = function(player) {
  if (player.army.units.length === 0 || this.didPlayerLoseHQ(player)) {
    return true;
  }
}

// Map.prototype.getAllBuildingsForPlayer = function(player) {
//   var buildings = [];
//   this.getAllBuildings().forEach(function(building) {
//     if(parseInt(building.owner) === player)
//       buildings.push(building);
//   });

//   return buildings;
// }

Battle.prototype.didPlayerLoseHQ = function(player) {
  console.log(this.map);
  console.log(this.map.getAllBuildingsForPlayer(player));
  this.map.getAllBuildingsForPlayer(player).forEach(function(building) {
    console.log(building.name);
    if (building.name === "castle") {
      return false;
    }
    else {
      return true;
    }
  });
}

