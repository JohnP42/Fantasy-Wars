IronGuard.prototype = new UnitInfantry();
IronGuard.prototype.constructor = IronGuard;

function IronGuard(position) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("stand", [30, 31], 2);
  this.animations.add("move", [32, 33], 8);
  this.name = "Dwarf IronGuard";
  this.health = 100;
  this.attack = 50;
  this.defense = 0.30;
  this.speed = 3;
  this.range = [1,1];
}