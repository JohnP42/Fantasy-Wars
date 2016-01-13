Longbow.prototype = new UnitInfantry();
Longbow.prototype.constructor = Longbow;

function Longbow(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5, 6, 7], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Elf Longbow";
  this.health = 100;
  this.attack = 45;
  this.defense = 0.1;
  this.speed = 4;
  this.range = [1,2];
  this.cost = 100;
  this.player = player;
}
