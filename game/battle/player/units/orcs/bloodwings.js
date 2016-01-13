BloodWing.prototype = new UnitFlying();
BloodWing.prototype.constructor = BloodWing;

function BloodWing() {
	this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [60, 61], 2);
  this.animations.add("move", [62, 63], 8);
  this.animations.add("attack", [64, 65, 66, 67], 8);
  this.moveSound = "move";
  this.attackSound = "slash";
  this.name = "Orc BloodWing";
  this.health = 100;
  this.attack = 65;
  this.defense = 0.1;
  this.speed = 7;
  this.range = [1,1];
  this.cost = 300;
  this.player = player;

}
