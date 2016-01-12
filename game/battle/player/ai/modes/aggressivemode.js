AggressiveMode.prototype = new Mode();
AggressiveMode.prototype.constructor = AggressiveMode;

// if an enemy unit is in sight, attack the enemy.
// Move towards the enemy position
// Build units to reinforce the army
function AggressiveMode(battle) {
  this.battle = battle;
};

AggressiveMode.prototype.execute = function() {
  var nextMode = "aggressive";

  _moveEachUnit();
  _buildPhase();
  return next_mode;
};

AggressiveMode.prototype._moveEachUnit = function() {
  this.battle.players[0].army.units.forEach(function(unit) {
    var possibleMoves = unit.getPossibleMoves(unit.pos, this.battle.map, this.battle.enemyPositions())
    var walkPath = possibleMoves[0].getPath(); //Eventually this will have logic to determine which move to make;
    unit.walkPath = walkPath;
    unit.move();
  });
};

AggressiveMode.prototype._buildPhase = function() {

};