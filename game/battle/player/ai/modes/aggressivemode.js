AggressiveMode.prototype = new Mode();
AggressiveMode.prototype.constructor = AggressiveMode;

// if an enemy unit is in sight, attack the enemy.
// Move towards the enemy position
// Build units to reinforce the army
function AggressiveMode(battle) {
  this.battle = battle;
  this.enemyHQPos = this._getEnemyHQPos();
  this.usedPositionsThisTurn = [];
  this.currentSelectedUnit = null;
  this.buildPhase = false;
};

AggressiveMode.prototype._endTurn = function() {
  battle.players[1].endTurn();
  battle.currentPlayer = 1;
  var prevGold = battle.getCurrentPlayer().gold;
  battle.addGold();
  if (prevGold !== battle.getCurrentPlayer().gold) {
      game.add.audio('coin').play();
  };
  battle.getCurrentPlayer().onTurnStart(battle.map, battle.currentPlayer);
  var style = { font: "65px Arial", fill: "#ff0044", align: "center", stroke: "white", strokeThickness: 5 };
  var text = game.add.text(game.world.centerX - 210 , game.world.centerY - 300, "Player 1 Turn", style);
  text.anchor.set(0.5);
  text.alpha = 1;
  var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
  battle.turn ++;
  turnCount.setText("Turn: " + battle.turn);
  currentPlayerText.setText("Player " + this.battle.currentPlayer);
  currentPlayerGold.setText("Gold: " + this.battle.players[battle.currentPlayer - 1].gold);
};

AggressiveMode.prototype._getEnemyHQPos = function() {
  // hqPos = this.battle.players[0].hqPos;
  var that = this;
  var hqPos = null;
  var enemyPlayer = this.battle.players[0]
  var enemyBuildings = this.battle.map.getAllBuildings(true);
  enemyBuildings.forEach(function(buildingArray) {
    if (buildingArray[0].name === "castle" && parseInt(buildingArray[0].owner) === 1) {
      hqPos = that._getBarracksPosition(buildingArray);
    }
  });;
  console.log(hqPos);
  return hqPos;
};

AggressiveMode.prototype._getDistanceBetween = function(pos1, pos2) {
  // Currently using pythagorean theorem to find distance, but can use some distance function which takes account terrain.
  return Math.sqrt(Math.pow(Math.abs(pos1.x - pos2.x), 2) + Math.pow(Math.abs(pos1.y - pos2.y), 2));
};

AggressiveMode.prototype.arrayIncludesPosition = function(array, pos) {
  var included = false;
  array.forEach(function(item) {
    if(pos.equals(item)) {
      included = true;
      return;
    }
  });
  return included;
}

AggressiveMode.prototype.handleComputerMove = function() {
  // Returns mousePos to position computer desires to click.
  // Sets battle.computerCanClick to true once a selection is made.
  var mousePos;
  if (this.buildPhase === true) {
    if (this.battle.turnState !== "buildUnit") {
      if (this._isOpenBarracks() && this.battle.getCurrentPlayer().gold >= 100) {
          mousePos = this._selectNextBarracks();
      }
      else {
        this.buildPhase = false;
        this._endTurn();
      }
    }
    else if (this.battle.turnState === "buildUnit") {
      mousePos = this._findUnitMousePos();
    }
  }
  else if(this.battle.turnState === "selectingUnit") {
    mousePos = this._selectNextUnit();
  }
  else if(this.battle.turnState === "selectingMove") {
    mousePos = this._selectNextMove();
  }
  else if(this.battle.turnState === "selectingAttack") {
    mousePos = this._selectNextAttack();
  }
  else if (this.battle.turnState === "capturePrompt") {
    mousePos = this._selectNextCapture();
  }
  else {
    mousePos = new Pos (1,1);
  }
  return mousePos;
};

AggressiveMode.prototype._unitOnMyBarracks = function(pos) {
  if (this.battle.getUnitAtPos(pos)) {
    return true;
  } else {
    return false;
  }
};

AggressiveMode.prototype._isOpenBarracks = function() {
  var that = this;
  var barracksWithOutUnits = this._getAllMyOpenBarracks();

  if (barracksWithOutUnits.length > 0) {
    return true;
  }
  else {
    return false;
  }
};

AggressiveMode.prototype._getAllMyBarracksPositions = function() {
  var that = this;
  var allMyBarracksPos = [];
  this._getAllBarracks().forEach(function(myBarracks) {
    allMyBarracksPos.push(that._getBarracksPosition(myBarracks));
  });
  return allMyBarracksPos;
};

AggressiveMode.prototype._getAllMyOpenBarracks = function() {
  var that = this;
  var barracksWithOutUnits = [];
  this._getAllMyBarracksPositions().forEach(function(barracksPos){
    if (!that._unitOnMyBarracks(barracksPos)) {
      barracksWithOutUnits.push(barracksPos);
    }
  });
  return barracksWithOutUnits;
};


AggressiveMode.prototype._selectNextBarracks = function() {
  if (this._isOpenBarracks()) {
    var mousePos = this._getAllMyOpenBarracks()[0];
    this.battle.currentSelectedTile = this.battle.map.getTileAtPos(mousePos);
    return mousePos;
  }
  else {
    return null;
  }
};

AggressiveMode.prototype._getAllBarracks = function() {
  var that = this;
  var barracks = [];
  this.battle.map.getAllBuildings(true).forEach(function(buildingArray) {
    if (buildingArray[0].name === "barracks" && parseInt(buildingArray[0].owner) === that.battle.currentPlayer) {
      barracks.push(buildingArray);
    }
  });
  return barracks;
};


AggressiveMode.prototype._getBarracksPosition = function(barracks) {
  var barracksTileCoordinates = new Pos(parseInt(barracks[1]), parseInt(barracks[2]));
  return barracksTileCoordinates;
};

AggressiveMode.prototype._getMostExpensiveAffordableUnit = function () {
  var armyType = this.battle.getCurrentPlayer().armyType();
  var mostExpensiveAffordableUnit = null;
  var mostExpensiveAffordableUnitIndex = null;
  var greatestAffordableUnitCost = 0;
  var unitIndex = -1;
  var result = [];
  for (var unit in UNITS[armyType]) {
    unitIndex += 1;
    if (UNITS[armyType][unit] > greatestAffordableUnitCost && UNITS[armyType][unit] <= this.battle.getCurrentPlayer().gold) {
      greatestAffordableUnitCost = UNITS[armyType][unit];
      mostExpensiveAffordableUnit = unit;
      mostExpensiveAffordableUnitIndex = unitIndex;
    }
  }
  result.push(mostExpensiveAffordableUnit);
  result.push(mostExpensiveAffordableUnitIndex);
  return result;
}

AggressiveMode.prototype._findUnitMousePos = function() {
  var mostExpensiveAffordableUnit = this._getMostExpensiveAffordableUnit();
  var unit = mostExpensiveAffordableUnit[0];
  var unitIndex = mostExpensiveAffordableUnit[1];
  var unitPosition = new Pos(5, 3 + unitIndex);
  return unitPosition;
}

AggressiveMode.prototype._selectNextUnit = function() {
  var nextUnitPos = null;
  var that = this;
  this.battle.players[1].army.units.forEach(function(unit) {
    if (!nextUnitPos && !unit.movedThisTurn) {
      that.currentSelectedUnit = unit;
      nextUnitPos = unit.pos;
    };
  });
  // Logic for when to end turn
  if (nextUnitPos === null) {
    this.buildPhase = true;
  }
  return nextUnitPos
}

AggressiveMode.prototype._selectNextMove = function() {
  var that = this;
  var nextMovePos = null;
  var possibleMoves = this.currentSelectedUnit.getPossibleMoves(this.currentSelectedUnit.pos, this.battle.map, this.battle.enemyPositions());
  var filteredPossibleMoves = this._filterPossibleMoves(possibleMoves);
  if (this.currentSelectedUnit instanceof UnitArtillery) {
    nextMovePos = that._handleArtilleryMovement(filteredPossibleMoves);
  } else {
    // nextMovePos = this._getClosestMoveToEnemyHQ(filteredPossibleMoves);
    // nextMovePos = this._getClosestMoveToEnemyUnit(filteredPossibleMoves);
    nextMovePos = this._randomizeUnitMovement(filteredPossibleMoves);
  }
  return nextMovePos;
}

AggressiveMode.prototype._selectNextAttack = function() {
  var nextAttackPos = null;
  var possibleAttackMoves = this.currentSelectedUnit.getPossibleAttacks(this.battle.map);
  var filteredAttackMoves = this._filterPossibleAttackMoves(possibleAttackMoves);
  return filteredAttackMoves[0];
}

AggressiveMode.prototype._selectNextCapture = function() {
  return this.currentSelectedUnit.pos;
};


AggressiveMode.prototype._filterPossibleMoves = function(possibleMoves) {
  // Takes in list of possible moves and filters out positions in which friendly units already exist
  // for each possible move
    // Call unitAtPos a check if null
  var that = this;
  result = [];
  possibleMoves.forEach(function(movePos) {
    var unitAtPos = that.battle.getUnitAtPos(movePos);
    if (!unitAtPos) {
      result.push(movePos);
    };
  });
  return result;
}

AggressiveMode.prototype._filterPossibleAttackMoves = function(possibleAttackMoves) {
  var that = this;
  result = [];
  possibleAttackMoves.forEach(function(attackPos) {
    var unitAtPos = that.battle.getUnitAtPos(attackPos);
    if (unitAtPos && unitAtPos.player !== that.currentSelectedUnit.player) {
      result.push(attackPos);
    };
  });
  return result;
}

AggressiveMode.prototype._getClosestMoveToEnemyHQ = function(possibleMoves) {
  var that = this;
  bestMove = null;
  bestMoveDistance = 100;
  possibleMoves.forEach(function(movePos) {
    var distanceBetween = that._getDistanceBetween(that.enemyHQPos, movePos);
    if (distanceBetween < bestMoveDistance) {
      bestMove = movePos;
      bestMoveDistance = distanceBetween;
    };
  });
  return bestMove;
};

AggressiveMode.prototype._getClosestMoveToEnemyUnit = function(possibleMoves) {
  var that = this;
  // this.battle.enemyPositions()
  bestMove = null;
  bestMoveDistance = 100;
  this.battle.enemyPositions().forEach(function(enemyPos) {
    possibleMoves.forEach(function(movePos) {

    var distanceBetween = that._getDistanceBetween(enemyPos, movePos);
    if (distanceBetween < bestMoveDistance) {
      bestMove = movePos;
      bestMoveDistance = distanceBetween;
    };
  });
  });
  return bestMove;
};

AggressiveMode.prototype._randomizeUnitMovement = function(possibleMoves) {
  var move = null;
  if (Math.random() > .50) {
    move = this._getClosestMoveToEnemyHQ(possibleMoves)
  } else {
    move = this._getClosestMoveToEnemyUnit(possibleMoves)
  }
  return move
};

AggressiveMode.prototype._handleArtilleryMovement = function(possibleMoves) {
  var that = this;
  var nextMove = null;
  var rand = Math.random();
  if (rand > .50) {
    nextMove = this.currentSelectedUnit.pos;
  } else {
    nextMove = this._randomizeUnitMovement(possibleMoves);
  }
  return nextMove;
};

