MotorBike.prototype = new UnitInfantry();
MotorBike.prototype.constructor = MotorBike;

function MotorBike(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves" + player);
  game.add.existing(this);
  this.animations.add("stand", [40, 41], 8);
  this.animations.add("move", [42, 43], 12);
  this.animations.add("attack", [44, 45, 46, 47], 12);
  this.name = "Dwarf MotorBike";
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("rifle");
  this.health = 100;
  this.attack = 50;
  this.defense = 0.2;
  this.speed = 6;
  this.range = [1,2];
  this.cost = 200;
  this.player = player;
}
