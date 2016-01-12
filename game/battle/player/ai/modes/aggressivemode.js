AggressiveMode.prototype = new Mode();
AggressiveMode.prototype.constructor = AggressiveMode;

function AggressiveMode() {
};

AggressiveMode.prototype.execute = function() {
  nextMode = "aggressive";
  console.log("Implementing execute function");
  // if an enemy unit is in sight, attack the enemy.
  // Move towards the enemy position
  // Build units to reinforce the army
  return next_mode;
};