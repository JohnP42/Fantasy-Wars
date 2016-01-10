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
};

Unit.prototype.move = function(path) {
  // Moves unit along path
  // path is in the format: [location1, location2, ..., targetLocation]
  var that = this
  path.forEach(function(pos) {
    that.pos = pos;
    // TODO: Add tween/animation
  })
};

Unit.prototype.attack = function(pos) {
  //TODO: Attack enemy unit
};

Unit.prototype.getPossibleMoves = function(pos, map) {
  var remainder = this.speed;
  var visited = [pos];
  this.getPossibleMovesRecursive(remainder, pos, visited, map);
};

Unit.prototype.getPossibleMovesRecursive = function(remainder, pos, visited, map) { //visited takes an array
  var that = this;
  if (remainder === 0 || remainder === 1) {
    return [];
  };
  visited.push(pos);
  var surroundingPos = this.getSurroundingPos(pos);
  surroundingPos.forEach(function(pos) {
    //TODO: create getTileAtpos() && getPenalty();
    var newRemainder = remainder - map.getPenaltyAtPos(pos, that);
    if ((newRemainder > 0 && !visited.includes(pos)) {
      return [pos].concat(getPossibleMovesRecursive(newRemainder, pos, visited));
    }
  });
};

Unit.prototype.getSurroundingPos = function(pos) {
  // Returns an array of positions surrounding the input position
  return [new Pos(pos.x, pos.y + 1), // top
          new Pos(pos.x + 1, pos.y), // right
          new Pos(pos.x, pos.y - 1), // bottom
          new Pos(pos.x - 1, pos.y) // left
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
