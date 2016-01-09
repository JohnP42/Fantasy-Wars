IronGuard.prototype = new UnitInfantry();
IronGuard.prototype.constructor = IronGuard;

function IronGuard(position) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("ironGuardStand", [10, 11], 2);
  this.animations.add("ironGuardMove", [12, 13], 8);
  this.name = "Dwarf IronGuard";
  this.health = 100;
  this.attack = 50;
  this.defense = 0.30;
  this.speed = 3;
  this.range = [1,1];
}