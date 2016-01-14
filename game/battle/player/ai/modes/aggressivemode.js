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