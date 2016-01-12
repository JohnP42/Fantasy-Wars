Catapult.prototype = new UnitArtillery();
Catapult.prototype.constructor = Catapult;

function Catapult() {
	this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.moveSound = "move";
  this.attackSound = "slash";
  this.name = "Orc Catapult";
  this.health = 100;
  this.attack = 45;
  this.defense = 0.1;
  this.speed = 4;
  this.range = [1,2];
  this.cost = 100;
  this.player = player;
	
}