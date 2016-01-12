DefaultMode.prototype = new Mode();
DefaultMode.prototype.constructor = DefaultMode;

function DefaultMode() {
};

DefaultMode.prototype.execute = function() {
  nextMode = "aggressive";
  console.log("Implementing execute function");
  // if an enemy unit is in sight, attack the enemy.
  // Move towards cover
  // Build units to reinforce the army
  return nextMode;
};