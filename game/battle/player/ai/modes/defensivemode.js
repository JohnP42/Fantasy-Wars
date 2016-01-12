Defensive.prototype = new Mode();
Defensive.prototype.constructor = Defensive;

function Defensive(battle) {
  this.battle = battle;
};

Defensive.prototype.execute = function() {
  nextMode = "defensive";
  console.log("Implementing execute function");
  // if an enemy unit move to cover and attack or just move to cover
  // Move towards cover
  // Build units to reinforce the army
  return nextMode;
};