function Battle(map, players) {
  this.map = map;
  this.players = players;
  this.turn = 0;
  this.currentSelectedUnit = null;
  this.currentSelectedMovement = [];
};

Battle.prototype.update = function() {
  for (var i = 0; i < this.players.length; i++) {
  	this.players[i].update(this.map, this.turn === i + 1)
  }
  this.onClickListener();
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
    pos = new Pos(Math.floor(game.input.activePointer.worldX / TILESCALE), Math.floor(game.input.activePointer.worldY / TILESCALE));
    unit = this.getUnitAtPos(pos);
    if(this.currentSelectedUnit !== unit) {
      this.currentSelectedUnit = unit;
      this.currentSelectedMovement = this.getSelectedMoves();
    }
  }
};

Battle.prototype.selectingMovementSquare = function() {
  
}

Battle.prototype.getSelectedMoves = function() {
  //TODO
  if(this.currentSelectedUnit) {
    var positions = this.currentSelectedUnit.getPossibleMoves(this.currentSelectedUnit.pos, this.map);

    positions = positions.map(function(pos) {
      return new Phaser.Rectangle(pos.x * TILESCALE, pos.y * TILESCALE, TILESCALE, TILESCALE);
    });

    return positions;
  }
  return [];
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
