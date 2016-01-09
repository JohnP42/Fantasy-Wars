function Unit(position) {
  this.position = position;
  this.health = 100;
  // Phaser.Sprite.call(this, game, position.canvasX, position.canvasY, 'spritename');
};

Unit.prototype.update = function() {
  //TODO: Update method
};

Unit.prototype.move = function(path) {
  // Moves unit along path
  // path is in the format: [location1, location2, ..., targetLocation]
  var that = this
  path.forEach(function(position) {
    that.position = position;
    // TODO: Add tween/animation
  })
};

Unit.prototype.attack = function(position) {
  //TODO: Attack enemy unit
};

// Unit.prototype.getPossibleMoves = function(position) {
//   function getPossibleMovesRecursive(function(remainder, position, visited) { //visited takes an array
//     if (remainder === 0 || remainder === 1) {
//       return [];
//     };
//     visited.push(position);
//     //TODO: create get_surrounding_tiles();
//     var surrounding_tiles = getSurroundingTiles(position);
//     surrounding_tiles.forEach(function(tile) {
//       //TODO: create getTileAtposition() && getPenalty();
//       var newRemainder = remainder - game.getTileAtposition(position).getPenalty();
//       if ((newRemainder > 0 && !visited.includes(tile)) {
//         return [tile].concat(getPossibleMovesRecursive(newRemainder, tile, visited));
//       }
//     })
//   })
// };

Unit.prototype.getSurroundingTiles = function(position) {
  // Returns an array of positions surrounding the input position
  return [new Position(position.x, position.y + 1), // top
          new Position(position.x + 1, position.y), // right
          new Position(position.x, position.y - 1), // bottom
          new Position(position.x - 1, position.y) // left
  ];
};

Unit.prototype.getPossibleAttacks = function(position) {
  //TODO: Returns possible positions that can be attacked.
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

Unit.prototype.getAttackDamage = function(position) {
  //TODO: Returns attack damage based on formula for attack type and defense.
};

Unit.prototype.die = function(position) {
  //TODO: Destroys unit and removes from map
  this.destroy();
}
