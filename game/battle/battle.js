function Battle(map, players) {
  this.map = map;
  this.players = players;
  this.turn = 0;
  this.currentSelectedUnit = null;
};

Battle.prototype.update = function() {
  for (var i = 0; i < this.players.length; i++) {
  	this.players[i].update(this.map, this.turn === i + 1)
  }
  this.onClickListener();
  this.showSelectedMoves();
};

Battle.prototype.getUnitAtPos = function(pos) {
  // Retrieves Unit at given pos
  finalUnit = null;
  this.players.forEach(function(player) {
    player.army.units.forEach(function(unit) {
      if (unit.pos.equals(pos)) {
         finalUnit = unit;
      };
    });
  });
  return finalUnit;
};

Battle.prototype.onClickListener = function() {
  // Retrieve tile at a given pos
  if(game.input.mousePointer.isDown) {
    pos = new Pos(Math.floor(game.input.activePointer.worldX / TILESCALE), Math.floor(game.input.activePointer.worldY / TILESCALE))
    unit = this.getUnitAtPos(pos);
    this.currentSelectedUnit = unit;
  }
};

Battle.prototype.showSelectedMoves = function() {
  //TODO
  if(this.currentSelectedUnit) {
    var tiles = this.currentSelectedUnit.getPossibleMoves(this.currentSelectedUnit.pos, this.map);
    console.log(tiles);
  }
}

Battle.prototype.getTileAtPos = function(pos) {
  // Retrieve tile at a given pos
  return this.map.getTileAtPos(pos);
};

Battle.prototype.switchTurn = function() {
  //TODO: Switches turn to next player or starts game
};

Battle.prototype.unitCombat = function(unit1, unit2) {
  //TODO: Initiates a battle sequence between two units
};
