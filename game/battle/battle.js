function Battle(map) {
  this.map = map;
};

Battle.prototype.update = function() {
  //TODO: Update method
};

Battle.prototype.getUnitAtPosition = function() {
  //TODO: Retrieve unit at a given location
};

Battle.prototype.getTileAtPosition = function(position) {
  //TODO: Retrieve tile at a given location
};

Battle.prototype.switchTurn = function() {
  //TODO: Switches turn to next player or starts game
};

Battle.prototype.unitCombat = function(unit1, unit2) {
  //TODO: Initiates a battle sequence between two units
};
