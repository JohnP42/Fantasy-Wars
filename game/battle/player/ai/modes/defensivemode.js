DefensiveMode.prototype = new Mode();
DefensiveMode.prototype.constructor = DefensiveMode;

function DefensiveMode(battle) {
  this.battle = battle;
  this.enemyHQPos = this._getEnemyHQPos();
  this.usedPositionsThisTurn = [];
  this.currentSelectedUnit = null;
  this.buildPhase = false;
};

DefensiveMode.prototype.execute = function() {
  nextMode = "defensive";
  console.log("Implementing execute function");
  // if an enemy unit move to cover and attack or just move to cover
  // Move towards cover
  // Build units to reinforce the army
  return nextMode;
};

DefensiveMode.prototype._getFriendlyHQPos = function() {
  // hqPos = this.battle.players[0].hqPos;
  var that = this;
  var hqPos = null;
  var enemyPlayer = this.battle.players[0]
  var enemyBuildings = this.battle.map.getAllBuildings(true);
  enemyBuildings.forEach(function(buildingArray) {
    if (buildingArray[0].name === "castle" && parseInt(buildingArray[0].owner) === 2) {
      hqPos = that._getBarracksPosition(buildingArray);
    }
  });
  return hqPos;
};

DefensiveMode.prototype._randomizeUnitMovement = function(possibleMoves) {
  var move = null;
  if (Math.random() > .50) {
    move = this._getClosestMoveToFriendlyHQ(possibleMoves);
  } else {
    move = this._getClosestMoveToEnemyUnit(possibleMoves);
  }
  return move
};

DefensiveMode.prototype._getClosestMoveToFriendlyHQ = function(possibleMoves) {
  var that = this;
  bestMove = null;
  bestMoveDistance = 100;
  possibleMoves.forEach(function(movePos) {
    var distanceBetween = that._getDistanceBetween(that._getFriendlyHQPos(), movePos);
    if (distanceBetween < bestMoveDistance) {
      bestMove = movePos;
      bestMoveDistance = distanceBetween;
    };
  });
  return bestMove;
};

