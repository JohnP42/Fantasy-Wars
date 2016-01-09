function Battle(map, players) {
  this.map = map;
  this.players = players;
  this.turn = 0;
};

Battle.prototype.update = function() {
  for (var i = 0; i < this.players.length; i++) {
  	this.players[i].update(this.map, this.turn === i + 1)
  }
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
