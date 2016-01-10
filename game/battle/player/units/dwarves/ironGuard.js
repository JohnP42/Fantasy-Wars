IronGuard.prototype = new UnitInfantry();
IronGuard.prototype.constructor = IronGuard;

function IronGuard(pos) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("stand", [30, 31], 2);
  this.animations.add("move", [32, 33], 8);
  this.animations.add("attack", [34, 35], 8);
  this.name = "Dwarf IronGuard";
  this.health = 100;
  this.attack = 75;
  this.defense = 0.40;
  this.speed = 3;
  this.range = [1,1];
  this.cost = 400;
}