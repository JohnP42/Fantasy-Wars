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

AggressiveMode.prototype._buildPhase = function() {
};

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

AggressiveMode.prototype._getClosestMove = function(possibleMoves) {
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
  if(this.battle.turnState === "selectingUnit") {
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
  } else {
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
    this._endTurn();
  }
  return nextUnitPos
}

AggressiveMode.prototype._selectNextMove = function() {
  var nextMovePos = null;
  var possibleMoves = this.currentSelectedUnit.getPossibleMoves(this.currentSelectedUnit.pos, this.battle.map, this.battle.enemyPositions());
  var filteredPossibleMoves = this._filterPossibleMoves(possibleMoves);
  // this._getClosestMove(possibleMoves)
  // nextMovePos = filteredPossibleMoves[1];
  nextMovePos = this._getClosestMove(filteredPossibleMoves);
  return nextMovePos;
}

AggressiveMode.prototype._selectNextAttack = function() {
  var nextAttackPos = null;
  var possibleAttackMoves = this.currentSelectedUnit.getPossibleAttacks(this.battle.map);
  var filteredAttackMoves = this._filterPossibleAttackMoves(possibleAttackMoves);
  return filteredAttackMoves[0];
}

AggressiveMode.prototype._selectNextCapture = function() {

}

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
