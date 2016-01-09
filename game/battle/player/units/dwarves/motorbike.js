MotorBike.prototype = new UnitInfantry();
MotorBike.prototype.constructor = MotorBike;

function MotorBike(position) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("stand", [40, 41], 8);
  this.animations.add("move", [42, 43], 12);
  this.animations.add("attack", [44, 45], 12);
  this.name = "Dwarf MotorBike";
  this.hp = 100;
  this.attack = 50;
  this.defense = 0.2;
  this.speed = 6;
  this.range = [1,2];
  this.cost = 200;
}