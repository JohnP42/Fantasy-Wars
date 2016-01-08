function Unit(location) {
  this.location = location;
  // Phaser.Sprite.call(this, game, location.canvasX, location.canvasY, 'spritename');
};

Unit.prototype.update = function() {
  //TODO: Update method
};

Unit.prototype.move = function(path) {
  //path is in the format: [location1, location2, ..., targetLocation]
  path.forEach(function(location) {
    this.location = location;
    // TODO: Add tween/animation
  })
};

Unit.prototype.attack = function(location) {
  //TODO: Attack enemy unit
};

Unit.prototype.getPossibleMoves = function(location) {
  getPossibleMovesRecursive(function(remainder, location, visited) { //visited takes an array
    if (remainder === 0 || remainder === 1) {
      return [];
    };
    visited.push(location);
    //TODO: create get_surrounding_tiles();
    var surrounding_tiles = get_surrounding_tiles(location);
    surrounding_tiles.forEach(function(tile) {
      //TODO: create getTileAtLocation() && getPenalty();
      var newRemainder = remainder - game.getTileAtLocation(location).getPenalty();
      if ((newRemainder > 0 && !visited.includes(tile)) {
        return [tile].concat(getPossibleMovesRecursive(newRemainder, tile, visited));
      }
    })
  })
};

Unit.prototype.getPossibleAttacks = function(location) {
  //TODO: Returns possible locations that can be attacked.
};

Unit.prototype.animate = function() {
  //TODO: Handles animation states
};

Unit.prototype.takeDamage = function(damage) {
  //TODO: Updates unit health based on damage.
  this.health -= damage;
  if (this.health <= 0) {
    this.die();
  }
};

Unit.prototype.getHealthNumber = function(location) {
  //TODO: Translates health percentage into a displayable number 1-10.
};

Unit.prototype.getAttackDamage = function(location) {
  //TODO: Returns attack damage based on formula for attack type and defense.
};

Unit.prototype.die = function(location) {
  //TODO: Destroys unit and removes from map
}
