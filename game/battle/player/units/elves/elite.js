Elite.prototype = new UnitInfantry();
Elite.prototype.constructor = Elite;

function Elite(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [10, 11], 2);
  this.animations.add("move", [12, 13], 8);
  this.animations.add("attack", [14, 15, 16, 17], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Elf Elite";
  this.health = 100;
  this.attack = 75;
  this.defense = 0.2;
  this.speed = 4;
  this.range = [1,1];
  this.cost = 300;
  this.player = player;
}
