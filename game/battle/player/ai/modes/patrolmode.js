PatrolMode.prototype = new Mode();
PatrolMode.prototype.constructor = PatrolMode;

function PatrolMode() {
  this.battle = battle;
};

PatrolMode.prototype.execute = function() {
  nextMode = "patrol";
  console.log("Implementing execute function");
  // Move towrds buildings with infantry to capture them
  // Move towards your infantry units to provide protection
  // Build units to reinforce the army
  return nextMode;
};