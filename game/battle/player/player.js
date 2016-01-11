function Player(army) {
	this.army = army;
  this.active = false; // boolean to be used to determine which players turn it is
};

Player.prototype.update = function(map, myTurn) {
	this.army.update(map);
};

Player.prototype.onLocationSelect = function() {
  //TODO: Options when location is selected
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