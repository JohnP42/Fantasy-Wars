Berserker.prototype = new UnitInfantry();
Berserker.prototype.constructor = Berserker;

function Berserker(pos, player) {
	this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [20, 21], 2);
  this.animations.add("move", [22, 23], 8);
  this.animations.add("attack", [24, 25, 26, 27], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Orc Berserker";
  this.health = 120;
  this.attack = 90;
  this.defense = 0;
  this.speed = 4;
  this.range = [1, 1];
  this.cost = 400;
  this.player = player;
}
