DefaultMode.prototype = new Mode();
DefaultMode.prototype.constructor = DefaultMode;

function DefaultMode(battle) {
  this.battle = battle;
};

DefaultMode.prototype.execute = function() {
  nextMode = "aggressive";
  // if an enemy unit is in sight, attack the enemy.
  // Move towards cover
  // Build units to reinforce the army
  return nextMode;
};

