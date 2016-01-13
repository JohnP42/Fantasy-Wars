Biplane.prototype = new UnitFlying();
Biplane.prototype.constructor = Biplane;

function Biplane(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves" + player);
  game.add.existing(this);
  this.animations.add("stand", [80, 81], 8);
  this.animations.add("move", [82, 83], 12);
  this.animations.add("attack", [84, 85, 86, 87], 12);
  this.name = "Dwarf Biplane";
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("machineGun");
  this.health = 100;
  this.attack = 50;
  this.defense = 0.2;
  this.speed = 8;
  this.range = [1,2];
  this.cost = 400;
  this.player = player;
}
