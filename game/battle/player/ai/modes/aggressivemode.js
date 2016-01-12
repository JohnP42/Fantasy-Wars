AggressiveMode.prototype = new Mode();
AggressiveMode.prototype.constructor = AggressiveMode;

// if an enemy unit is in sight, attack the enemy.
// Move towards the enemy position
// Build units to reinforce the army
function AggressiveMode(battle) {
  this.battle = battle;
  this.enemyHQPos = this._getEnemyHQPos();
};

AggressiveMode.prototype.execute = function() {
  var nextMode = "aggressive";
  this._moveEachUnit();
  this._buildPhase();
  return nextMode;
};

AggressiveMode.prototype._moveEachUnit = function() {
  var that = this;
  this.battle.players[1].army.units.forEach(function(unit) {
    that._moveUnit(unit);
  });
  // var unit = this.battle.players[1].army.units[1];
  // this._moveUnit(unit);
  window.setTimeout(this._endTurn, 1500);
};

AggressiveMode.prototype._buildPhase = function() {
};

AggressiveMode.prototype._moveUnit = function(unit) {
  var mousePos = unit.pos
  this.battle.currentSelectedTile = battle.map.getTileAtPos(mousePos);
  this.battle.currentSelectedUnit = unit;
  var possibleMoves = unit.getPossibleMoves(unit.pos, this.battle.map, this.battle.enemyPositions())
  this.battle.currentSelectedMovement = possibleMoves;
  this.battle.turnState = "selectingMove";
  this.battle.renderMoveHighlights();

  mousePos = this._getClosestMove(possibleMoves);
  var squareToMoveTo = this.battle.getMoveAtPos(mousePos);
  this.battle.turnState = "animatingMovement";
  unit.walkPath = squareToMoveTo.getPath();
  battle.animateMovement();
};

AggressiveMode.prototype._endTurn = function() {
  this.battle.players[1].endTurn();
  this.battle.currentPlayer = 1;
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  var text = game.add.text(game.world.centerX , game.world.centerY - 300, "Player 1 Turn", style);
  text.anchor.set(0.5);
  text.alpha = 1;
  var tween = game.add.tween(text).to( { alpha: 0 }, 2000, "Linear", true);
  this.battle.turn ++;
  turnCount.setText("Turn: " + battle.turn)
}

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