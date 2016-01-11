function Battle(map, players) {
  this.map = map;
  this.players = players;
  this.turn = 1;
  this.currentSelectedUnit = null;
  this.currentSelectedMovement = [];
  this.currentSelectedAttacks = [];
  this.turnState = "selectingUnit";
  this.canClick = true;
  this.currentPlayer = 1;
};

Battle.prototype.update = function() {
  for (var i = 0; i < this.players.length; i++) {
  	this.players[i].update(this.map, this.turn === i + 1)
  }
  if(this.turnState === "animatingMovement") {
    this.animateMovement();
  }
  else if (this.turnState === "animatingAttack"){
    this.animateAttack();
  }
  else {
    this.onClickListener();
  }

  if(this.turnState !== "selectingMove") {
    moveHighlights.removeChildren();
  }

  if(this.turnState !== "selectingAttack") {
    attackHighlights.removeChildren();
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
        this.renderMoveHighlights();
      }
    }
    else if(this.turnState === "selectingMove") {
      // if the selected move is valid, state becomes animation state, otherwise deselect unit
      var squareToMoveTo = this.getMoveAtPos(mousePos);

      if (squareToMoveTo === null) {
        this.turnState = "selectingUnit";
        this.currentSelectedUnit = null;
        this.currentSelectedMovement = [];
      }
      else {
        if (!this.currentSelectedUnit.movedThisTurn && this.currentSelectedUnit.player === this.currentPlayer) {
          this.turnState = "animatingMovement";
          this.currentSelectedUnit.walkPath = squareToMoveTo.getPath();
        };
      }
    }else if(this.turnState === "selectingAttack") {
      // if the selected move is valid, state becomes animation state, otherwise deselect unit
      var unitToAttack = this.getUnitToAttackAtPos(mousePos);

      if (unitToAttack === null || unitToAttack.player === this.currentSelectedUnit.player) {
        this.turnState = "selectingUnit";
        this.currentSelectedUnit = null;
        this.currentSelectedAttack = [];
      }
      else {
        this.turnState = "animatingAttack";
        if (this.currentSelectedUnit.distanceTo(unitToAttack.pos) === 1) {
          this.unitCombat(this.currentSelectedUnit, unitToAttack, 0);
        }
        else {
          this.unitCombat(this.currentSelectedUnit, unitToAttack, this.map.getTileAtPos(unitToAttack.pos).protection);
        }
        this.currentSelectedAttack = [];
        // console.log(this.currentSelectedUnit.health - this.currentSelectedUnit.damageTaken);
        // console.log(unitToAttack.health - unitToAttack.damageTaken);
        console.log(this.currentSelectedUnit.getHealthNumber());
        console.log(unitToAttack.getHealthNumber());
      }
    }
  }

  if(game.input.mousePointer.isUp) {
    this.canClick = true;
  }
};

Battle.prototype.animateMovement = function() {
  if (this.currentSelectedUnit.move()) {
    this.turnState = "selectingAttack";
    this.currentSelectedMovement = [];
    this.currentSelectedAttacks = this.currentSelectedUnit.getPossibleAttacks(this.map);
    this.renderAttackHighlights();
  }
};

Battle.prototype.animateAttack = function() {
  this.turnState = "selectingUnit";
  this.currentSelectedUnit = null;
  this.currentSelectedMovement = [];
  this.currentSelectedAttacks = [];
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

Battle.prototype.getUnitToAttackAtPos = function(mousePos) {
  // detects if target position is valid; if yes, returns position, otherwise null
  finalSquare = null;
  this.currentSelectedAttacks.forEach(function(pos) {
    if (mousePos.equals(pos))
      finalSquare = pos;
  });

  return finalSquare === null ? null : this.getUnitAtPos(finalSquare);
};

Battle.prototype.renderMoveHighlights = function() {
  // parses Unit.getPossibleMoves for filtering (color/selection) - applies filter/rectangle
  if(!this.currentSelectedUnit.movedThisTurn) {
    var positions = this.currentSelectedMovement.slice();

    positions.forEach(function(pos) {
      moveHighlights.create(pos.canvasX(), pos.canvasY(), "selectionTiles", 0)
    });
    console.log(moveHighlights);
    console.log(this.currentSelectedUnit);
    moveHighlights.callAll("animations.add", "animations", "move", [0, 1, 2], 4, true);
    moveHighlights.callAll("animations.play", "animations", "move");
  }
};

Battle.prototype.renderAttackHighlights = function() {
  // parses Unit.getPossibleAttacks for filtering (color/selection) - applies filter/rectangle
  var positions = this.currentSelectedAttacks.slice();

  positions = positions.map(function(pos) {
    attackHighlights.create(pos.canvasX(), pos.canvasY(), "selectionTiles", 10)
  });
  attackHighlights.callAll("animations.add", "animations", "attack", [3, 4, 5], 4, true);
  attackHighlights.callAll("animations.play", "animations", "attack");
};

Battle.prototype.getTileAtPos = function(pos) {
  // Retrieve tile at a given pos
  return this.map.getTileAtPos(pos);
};

Battle.prototype.switchTurn = function() {
  //TODO: Switches turn to next player or starts game
};

Battle.prototype.unitCombat = function(unit1, unit2, terrainDefense) {
  unit2.takeDamage(unit1.getAttackDamage(unit2.defense, terrainDefense));
  if(terrainDefense === 0 && unit2.range[0] === 1 && unit2.getHealthNumber() > 0) {
    unit1.takeDamage(unit2.getAttackDamage(unit1.defense, terrainDefense));
  }
};
