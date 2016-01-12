Cannon.prototype = new UnitArtillery();
Cannon.prototype.constructor = Cannon;

function Cannon(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves" + player);
  game.add.existing(this);
  this.animations.add("stand", [50, 51], 2);
  this.animations.add("move", [52, 53], 8);
  this.animations.add("attack", [54, 55, 56, 57], 8);
  this.name = "Dwarf Cannon";
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("cannonShot");
  this.health = 100;
  this.attack = 120;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [2,4];
  this.cost = 1000;
  this.player = player;
}
