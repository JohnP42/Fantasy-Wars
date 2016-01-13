Catapult.prototype = new UnitArtillery();
Catapult.prototype.constructor = Catapult;

function Catapult() {
	this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [50, 51], 2);
  this.animations.add("move", [52, 53], 8);
  this.animations.add("attack", [54, 55, 56, 57], 8);
  this.moveSound = "move";
  this.attackSound = "mortarShot";
  this.name = "Orc Catapult";
  this.health = 100;
  this.attack = 90;
  this.defense = 0.1;
  this.speed = 3;
  this.range = [3,4];
  this.cost = 500;
  this.player = player;

}
