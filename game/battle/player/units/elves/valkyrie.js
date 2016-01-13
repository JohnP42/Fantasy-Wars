Valkyrie.prototype = new UnitCavalry();
Valkyrie.prototype.constructor = Valkyrie;

function Valkyrie(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [50, 51], 2);
  this.animations.add("move", [52, 53], 8);
  this.animations.add("attack", [54, 55, 56, 57], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("flash");
  this.name = "Elf Valkyrie";
  this.health = 100;
  this.attack = 65;
  this.defense = 0;
  this.speed = 7;
  this.range = [2,3];
  this.cost = 500;
  this.player = player;
}
