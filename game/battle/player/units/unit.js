function Unit(location) {
  this.location = location;
  // Phaser.Sprite.call(this, game, location.canvasX, location.canvasY, 'spritename');
};

Unit.prototype.update = function() {
  //TODO: Update method
};

Unit.prototype.move = function(location) {
  //TODO: Unit movement
  this.location = location
};

Unit.prototype.attack = function(location) {
  //TODO: Attack enemy unit
};

Unit.prototype.getPossibleMoves = function() {
  //TODO: Possible movement
};

Unit.prototype.getPossibleAttacks = function(location) {
  //TODO: Returns possible locations that can be attacked.
};

Unit.prototype.animate = function() {
  //TODO: Handles animation states
};

Unit.prototype.takeDamage = function(damage) {
  //TODO: Updates unit health based on damage.
};

Unit.prototype.getHealthNumber = function(location) {
  //TODO: Translates health percentage into a displayable number 1-10.
};

Unit.prototype.getAttackDamage = function(location) {
  //TODO: Returns attack damage based on formula for attack type and defense.
};
