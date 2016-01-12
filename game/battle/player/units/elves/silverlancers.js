SilverLancer.prototype = new UnitCavalry();
SilverLancer.prototype.constructor = SilverLancer;

function SilverLancer(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.moveSound = "move";
  this.attackSound = "slash";
  this.name = "Elf SilverLancer";
  this.health = 100;
  this.attack = 75;
  this.defense = 0.3;
  this.speed = 7;
  this.range = [1,1];
  this.cost = 600;
  this.player = player;
}
