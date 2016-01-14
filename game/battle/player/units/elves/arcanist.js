Arcanist.prototype = new UnitInfantry();
Arcanist.prototype.constructor = Arcanist;

function Arcanist(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [20, 21], 2);
  this.animations.add("move", [22, 23], 8);
  this.animations.add("attack", [24, 25, 26, 27], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("flash");
  this.name = "Elf Arcanist";
  this.health = 100;
  this.attack = 75;
  this.defense = 0;
  this.speed = 4;
  this.range = [2,3];
  this.cost = 300;
  this.player = player;
}
