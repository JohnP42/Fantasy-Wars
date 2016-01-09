Grenadier.prototype = new UnitInfantry();
Grenadier.prototype.constructor = Grenadier;

function Grenadier(position) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("grenadierStand", [10, 11], 2);
  this.animations.add("grenadierMove", [12, 13], 8);
  this.name = "Dwarf Grenadier";
  this.hp = 100;
  this.attack = 50;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [1,1];
}