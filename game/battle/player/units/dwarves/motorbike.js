MotorBike.prototype = new UnitInfantry();
MotorBike.prototype.constructor = MotorBike;

function MotorBike(position) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("motorBikeStand", [0, 1], 2);
  this.animations.add("motorBikeMove", [2, 3], 8);
  this.name = "Dwarf MotorBike";
  this.hp = 100;
  this.attack = 50;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [1,1];
}