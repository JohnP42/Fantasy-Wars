function Battle(map, players) {
  this.map = map;
  this.players = players;
  this.turn = 0;
  this.currentSelectedUnit = null;
  this.currentSelectedMovement = [];
  this.turnState = "selectingUnit";
  this.canClick = true;
};

Battle.prototype.update = function() {
  for (var i = 0; i < this.players.length; i++) {
  	this.players[i].update(this.map, this.turn === i + 1)
  }
  if(this.turnState !== "animatingMovement") {
    this.onClickListener();
  }
  else {
    this.animateMovement();
  }
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
  if(game.input.mousePointer.isDown && this.canClick) {
    // calculate tile on which mouse click happens
    var mousePos = new Pos(Math.floor(game.input.activePointer.worldX / TILESCALE), Math.floor(game.input.activePointer.worldY / TILESCALE));
    this.canClick = false;
    // get the unit in the tile
    if(this.turnState === "selectingUnit") {
      unit = this.getUnitAtPos(mousePos);
      if(this.currentSelectedUnit !== unit) {
        this.currentSelectedUnit = unit;
        // get possible moves
        this.currentSelectedMovement = this.currentSelectedUnit.getPossibleMoves(this.currentSelectedUnit.pos, this.map);
        this.turnState = "selectingMove";
      }
    }
    else if(this.turnState ==="selectingMove") {
      // if the selected move is valid, state becomes animation state, otherwise deselect unit
      var squareToMoveTo = this.getMoveAtPos(mousePos);
      if (squareToMoveTo === null) {
        this.turnState = "selectingUnit";
        this.currentSelectedUnit = null;
        this.currentSelectedMovement = [];
      }
      else {
        if (!this.currentSelectedUnit.movedThisTurn) {
          // move
          this.turnState = "animatingMovement";
          this.currentSelectedUnit.walkPath = squareToMoveTo.getPath();
        };
      }
    }
  }

  if(game.input.mousePointer.isUp) {
    this.canClick = true;
  }
};

Battle.prototype.animateMovement = function() {
  if (this.currentSelectedUnit.move()) {
    this.turnState = "selectingUnit";
    this.currentSelectedUnit = null;
    this.currentSelectedMovement = [];
  }
};

Battle.prototype.getMoveAtPos = function(mousePos) {
  // detects if target position is valid; if yes, returns position, otherwise null
  finalSquare = null;
  this.currentSelectedMovement.forEach(function(pos) {
    if (mousePos.equals(pos))
      finalSquare = pos;
  });
  return finalSquare;
};

Battle.prototype.getSelectedMoves = function() {
  // parses Unit.getPossibleMoves for filtering (color/selection) - applies filter/rectangle
  if(this.currentSelectedUnit && !this.currentSelectedUnit.movedThisTurn) {
    var positions = this.currentSelectedMovement.slice();

    positions = positions.map(function(pos) {
      return new Phaser.Rectangle(pos.x * TILESCALE, pos.y * TILESCALE, TILESCALE, TILESCALE);
    });

    return positions;
  }
  return [];
};

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
