Unit.prototype = Object.create(Phaser.Sprite.prototype);
Unit.prototype.constructor = Unit;

function Unit(pos, player) {
  this.player = player;
  this.pos = pos;
  this.health = 100;
  this.damageTaken = 0;
  this.speed = 3;
  this.movedThisTurn = false;
  this.range = [1, 1];
  this.walkPath = [];
  this.attacking = false;
  this.alive = true;
  this.healthText = null;
  // Phaser.Sprite.call(this, game, pos.canvasX, pos.canvasY, 'spritename');
};

Unit.prototype.updateUnit = function(map, turnState) {
  //TODO: Update method
  this.updateDisplayHealth();
  if(this.walkPath.length === 0 && !this.attacking) {
    this.animations.play("stand");
    this.x = this.pos.canvasX();
    this.y = this.pos.canvasY();
  }
};

Unit.prototype.grayOut = function() {
  var gray = game.add.filter('Gray');
  this.filters = [gray];
}

Unit.prototype.attackAnim = function() {
  this.attackSound.play('', 0, 1, false, false);
  return this.animations.currentAnim.isFinished;
};

Unit.prototype.move = function() {
  // Moves unit along path
  // path is in the format: [location1, location2, ..., targetLocation]
  this.animations.play("move");
  // this.moveSound.play('', 0, 1, false, false);
  var nextTile = this.walkPath[this.walkPath.length - 1];

  if (!nextTile)
    return true;

  if (nextTile.canvasX() > this.x) {
    this.x += 2;
    this.scale.x = 1;
    this.anchor.setTo(0, 0);
  }
  if(nextTile.canvasX() < this.x) {
    this.x -= 2;
    this.scale.x = -1;
    this.anchor.setTo(1, 0);
  }

  if(nextTile.canvasY() > this.y)
    this.y += 2;
  if(nextTile.canvasY() < this.y)
    this.y -= 2;
  if(nextTile.canvasX() === this.x && nextTile.canvasY() === this.y) {
    this.pos.x = this.walkPath[this.walkPath.length - 1].x;
    this.pos.y = this.walkPath[this.walkPath.length - 1].y;
    this.walkPath.pop();
  }
  if (this.walkPath.length === 0) {
    this.movedThisTurn = true;
    this.grayOut();
  }
  return (this.walkPath.length === 0);
};

Unit.prototype.getPossibleMoves = function(pos, map, enemyPositions) {

  var that = this;
  var finalArray = [pos]; // valid positions to move into
  var closed = []; // previously searched positions
  var moved = [0]; // cost of movement

  var x = 0;

  while (closed.length < finalArray.length) {
    // for each square, find the possible next moves
    this.getSurroundingPos(finalArray[x]).forEach(function(position) {
      // if those moves are valid (terrain and grid)
      if(map.posValid(position) && !that.arrayIncludesPosition(enemyPositions, position)) {
        // if the position has not already been counted
        if(!that.arrayIncludesPosition(finalArray, position)) {
          // if potential cost of movement exceeds speed, do not add to possible valid moves
          if(moved[finalArray.indexOf(finalArray[x])] + map.getPenaltyAtPos(position, that) <= that.speed) {
            // otherwise, add to possible valid moves
            finalArray.push(position);
            // add the corresponding movement cost to moved array
            moved.push(moved[finalArray.indexOf(finalArray[x])] + map.getPenaltyAtPos(position, that));
          }
        }
      }
    });
    // if the position hasn't already been found, add to closed array
    if(!this.arrayIncludesPosition(closed, finalArray[x]))
      closed.push(finalArray[x]);
    x++;
  }

  return finalArray;
}

Unit.prototype.arrayIncludesPosition = function(array, pos) {
  var included = false;
  array.forEach(function(item) {
    if(pos.equals(item)) {
      included = true;
      return;
    }
  });
  return included;
}

Unit.prototype.getSurroundingPos = function(pos) {
  // Returns an array of positions surrounding the input position
  return [new Pos(pos.x,     pos.y + 1, pos), // top
          new Pos(pos.x + 1, pos.y, pos), // right
          new Pos(pos.x,     pos.y - 1, pos), // bottom
          new Pos(pos.x - 1, pos.y,     pos) // left
  ];
};

Unit.prototype.getPossibleAttacks = function(map) {

  var finalArray = [];

  for(var x = this.pos.x - this.range[1]; x <= this.pos.x + this.range[1]; x++) {
    for(var y = this.pos.y - this.range[1]; y <= this.pos.y + this.range[1]; y++) {
      var newPos = new Pos(x, y);
      if(map.posValid(newPos) && this.distanceTo(newPos) >= this.range[0] && this.distanceTo(newPos) <= this.range[1])
        finalArray.push(newPos);
    }
  }
  return finalArray;
};

Unit.prototype.distanceTo = function(pos) {
  return (Math.abs(this.pos.x - pos.x) + Math.abs(this.pos.y - pos.y));
}

Unit.prototype.takeDamage = function(damage) {
  // Updates unit health based on damage.
  this.damageTaken += damage;
  if (this.damageTaken >= this.health) {
    this.die();
  }
  return damage;
};

Unit.prototype.getHealthNumber = function() {
  // Translates health percentage into a displayable number 1-10.
  // 95 => 10, 5=>1, 55 => 6, 50 => 5, 49 => 5
  return Math.ceil((this.health - this.damageTaken) / (this.health / 10)); //TODO: fix health denomination
};

Unit.prototype.getDefenseAsPercent = function() {
  // Gets defense as a percent
  return (this.defense * 100 + "%");
}

Unit.prototype.getAttackDamage = function(enemyDefense, terrainDefense) {
  return Math.floor((this.attack * ((this.health - this.damageTaken)/this.health)) * (1.0 - enemyDefense) * (1.0 - terrainDefense) * (Math.random() / 10 + 1));
};

Unit.prototype.die = function() {
  //TODO: Destroys unit and removes from map
  game.add.tween(this).to({alpha: 0}, 1000, "Linear", true);
  this.alive = false;
  this.healthText.destroy();
  this.destroy();
}

Unit.prototype.resetUnit = function() {
  // Resets unit at the end of a player's turn
  this.movedThisTurn = false;
  this.filters = null;
}

Unit.prototype.updateDisplayHealth = function() {
  var style = {font: "12px Arial", fill: "white", strokeThickness: 3}

  if (this.healthText === null) {
    this.healthText = game.add.text(this.x + 16, this.y + 16, "", style);
  }

    this.healthText.x = this.x + 16;
    this.healthText.y = this.y + 16;
  if(this.damageTaken === 0)
    this.healthText.text = "";
  else
    this.healthText.text = this.getHealthNumber();
}
