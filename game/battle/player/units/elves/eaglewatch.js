EagleWatch.prototype = new UnitFlying();
EagleWatch.prototype.constructor = EagleWatch;

function EagleWatch(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [70, 71], 2);
  this.animations.add("move", [72, 73], 8);
  this.animations.add("attack", [74, 75, 76, 77], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Elf EagleWatch";
  this.health = 100;
  this.attack = 65;
  this.defense = 0;
  this.speed = 9;
  this.range = [1,1];
  this.cost = 600;
  this.player = player;
}
