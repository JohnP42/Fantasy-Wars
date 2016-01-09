Mech.prototype = new UnitInfantry();
Mech.prototype.constructor = Mech;

function Mech(prototype) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("mechStand", [20, 21], 2);
  this.animations.add("mechMove", [22, 23], 8);
  this.name = "Dwarf Mech";
  this.health = 100;
  this.attack = 50;
  this.defense = 0.20;
  this.speed = 3;
  this.range = [1,1];
}