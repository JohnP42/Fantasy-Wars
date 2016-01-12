Valkyrie.prototype = new UnitCavalry();
Valkyrie.prototype.constructor = Valkyrie;

function Valkyrie(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.moveSound = "move";
  this.attackSound = "flash";
  this.name = "Elf Valkyrie";
  this.health = 100;
  this.attack = 65;
  this.defense = 0;
  this.speed = 7;
  this.range = [2,3];
  this.cost = 500;
  this.player = player;
}
