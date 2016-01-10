Unit.prototype = Object.create(Phaser.Sprite.prototype);
Unit.prototype.constructor = Unit;

function Unit(pos) {
  this.pos = pos;
  this.health = 100;
  this.speed = 3;
  // Phaser.Sprite.call(this, game, pos.canvasX, pos.canvasY, 'spritename');
};

Unit.prototype.updateUnit = function(map) {
  //TODO: Update method
  this.animations.play("stand");
  this.x = this.pos.canvasX();
  this.y = this.pos.canvasY();
};

Unit.prototype.move = function(path) {
  // Moves unit along path
  // path is in the format: [location1, location2, ..., targetLocation]
  var that = this
  path.reverse().forEach(function(pos) {
    that.pos = pos;
  });
  console.log(this);
};

Unit.prototype.attack = function(pos) {
  //TODO: Attack enemy unit
};

Unit.prototype.getPossibleMoves = function(pos, map) {

  var that = this;
  var finalArray = [pos];
  var closed = [];
  var moved = [0];

  var x = 0;

  while (closed.length < finalArray.length) {
    
    this.getSurroundingPos(finalArray[x]).forEach(function(position) {
      if(!that.arrayIncludesPosition(finalArray, position)) {
        if(moved[finalArray.indexOf(finalArray[x])] + map.getPenaltyAtPos(position, that) <= that.speed) {
          finalArray.push(position);
          moved.push(moved[finalArray.indexOf(finalArray[x])] + map.getPenaltyAtPos(position, that));
        }
      }
    });

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
  return [new Pos(pos.x, pos.y + 1, pos), // top
          new Pos(pos.x + 1, pos.y, pos), // right
          new Pos(pos.x, pos.y - 1, pos), // bottom
          new Pos(pos.x - 1, pos.y, pos) // left
  ];
};

Unit.prototype.getPossibleAttacks = function(pos) {
  //TODO: Returns possible pos that can be attacked.
};

Unit.prototype.animate = function() {
  //TODO: Handles animation states
};

Unit.prototype.takeDamage = function(damage) {
  // Updates unit health based on damage.
  this.health -= damage;
  if (this.health <= 0) {
    this.die();
  }
};

Unit.prototype.getHealthNumber = function() {
  // Translates health percentage into a displayable number 1-10.
  // 95 => 10, 5=>1, 55 => 6
  return Math.ceil(this.health / 10)
};

Unit.prototype.getAttackDamage = function(pos) {
  //TODO: Returns attack damage based on formula for attack type and defense.
};

Unit.prototype.die = function(pos) {
  //TODO: Destroys unit and removes from map
  this.destroy();
}
