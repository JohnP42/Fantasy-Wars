Arcanist.prototype = new UnitInfantry();
Arcanist.prototype.constructor = Arcanist;

function Arcanist(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.moveSound = "move";
  this.attackSound = "flash";
  this.name = "Elf Arcanist";
  this.health = 100;
  this.attack = 75;
  this.defense = 0;
  this.speed = 4;
  this.range = [2,3];
  this.cost = 300;
  this.player = player;
}
