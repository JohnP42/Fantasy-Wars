function Player(army, hqPos) {
	this.army = army;
  this.gold = 500;
  this.active = false; // boolean to be used to determine which players turn it is
  this.hqPos = hqPos;
};

Player.prototype.update = function(map, myTurn) {
	this.army.update(map);
};

Player.prototype.unitPositions = function() {
  return this.army.units.map(function(unit) {
    return unit.pos;
  });
};

Player.prototype.openMenu = function() {
  //TODO: Opens menu and presents player options
};

Player.prototype.endTurn = function() {
  // Allows player to end their turn
  this.army.units.forEach(function(unit) {
    unit.resetUnit();
  });
};

Player.prototype.quitGame = function() {
  //TODO: Allows player to end the battle
  // When this function is called it will start the "VictoryState" Game State
};
