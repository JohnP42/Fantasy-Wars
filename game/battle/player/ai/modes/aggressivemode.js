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

// AggressiveMode.prototype.execute = function() {
//   var nextMode = "aggressive";
//   this._moveEachUnit();
//   this._buildPhase();
//   return nextMode;
// };

// AggressiveMode.prototype._moveEachUnit = function() {
//   var that = this;
//   // this.battle.players[1].army.units.forEach(function(unit) {
//   //   that._moveUnit(unit);
//   // });
//   // var unit = this.battle.players[1].army.units[0];
//   // this._moveUnit(unit);
//   // unit = this.battle.players[1].army.units[0];
//   // this._moveUnit(unit);
//   var units = this.battle.players[1].army.units;
//   this._moveAllUnits(units);
//   sleep(500);
//   window.setTimeout(this._endTurn, 1500);
// };


// AggressiveMode.prototype._moveAllUnits = function(unitsArray) {
//   // Recursive Move function
//   // Base Case
//   if (unitsArray.length === 0) {
//     return;
//   } else {
//     this._moveUnit(unitsArray.pop(), function() {
//       this._moveAllUnits(unitsArray);
//     });
//   };
// }

// AggressiveMode.prototype._moveUnit = function(unit, callback) {
//   // var mousePos = unit.pos
//   // this.battle.currentSelectedTile = battle.map.getTileAtPos(mousePos);
//   this.battle.currentSelectedUnit = unit;
//   var possibleMoves = unit.getPossibleMoves(unit.pos, this.battle.map, this.battle.enemyPositions())
//   possibleMoves = this._filterPossibleMoves(possibleMoves)
//   this.battle.currentSelectedMovement = possibleMoves;
//   this.battle.turnState = "selectingMove";
//   this.battle.renderMoveHighlights();
//   // // mousePos = this._getClosestMove(possibleMoves);
//   var squareToMoveTo = this._getClosestMove(possibleMoves);
//   // this.usedPositionsThisTurn.push(squareToMoveTo);
//   this.battle.turnState = "animatingMovement";
//   unit.walkPath = squareToMoveTo.getPath();
// };

// AggressiveMode.prototype._keepAnimatingUnit = function(unit) {
//   if (unit.walkPath.length === 0) {
//     return false;
//   } else {
//     return true;
//   }
// };

AggressiveMode.prototype._endTurn = function() {
  battle.players[1].endTurn();
  battle.currentPlayer = 1;
  var prevGold = battle.getCurrentPlayer().gold;
  battle.addGold();
  if (prevGold !== battle.getCurrentPlayer().gold) {
      game.add.audio('coin').play();
  };
  battle.getCurrentPlayer().onTurnStart(battle.map, battle.currentPlayer);
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  var text = game.add.text(game.world.centerX , game.world.centerY - 300, "Player 1 Turn", style);
  text.anchor.set(0.5);
  text.alpha = 1;
  var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
  battle.turn ++;
  turnCount.setText("Turn: " + battle.turn);
  currentPlayerText.setText("Player " + this.battle.currentPlayer);
  currentPlayerGold.setText("Gold: " + this.battle.players[battle.currentPlayer - 1].gold);
};

AggressiveMode.prototype._getEnemyHQPos = function() {
  pos = this.battle.players[0].hqPos;
  return pos;
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
    // mousePos = this._selectNextBarracks();
    this.buildPhase = false;
    this._endTurn();
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

};

AggressiveMode.prototype._selectNextBarracks = function() {
  var barracks = this._getAllBarracks();
  console.log(barracks);
};

AggressiveMode.prototype._getAllBarracks = function() {
  var barracks = [];
  this.battle.map.getAllBuildingsForPlayer(battle.currentPlayer).forEach(function(building){
    if (building.name === "barracks") {
      barracks.push(building);
    }
  }); 
  return barracks;
};

AggressiveMode.prototype._filterPossibleMoves = function(possibleMoves) {
  // Takes in list of possible moves and filters out positions in which friendly units already exist
  // for each possible move
    // Call unitAtPos and check if null
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

