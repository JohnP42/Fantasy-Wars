Mech.prototype = new UnitInfantry();
Mech.prototype.constructor = Mech;

function Mech(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves" + player);
  game.add.existing(this);
  this.animations.add("stand", [20, 21], 2);
  this.animations.add("move", [22, 23], 8);
  this.animations.add("attack", [24, 25], 2);
  this.name = "Dwarf Mech"
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("cannonShot");
  this.health = 100;
  this.attack = 100;
  this.defense = 0.20;
  this.speed = 2;
  this.range = [1,2];
  this.cost = 200;
  this.player = player;
}
