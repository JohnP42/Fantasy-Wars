Warrior.prototype = new UnitInfantry();
Warrior.prototype.constructor = Warrior;

function Warrior(pos) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.name = "Dwarf Warrior";
  this.health = 100;
  this.attack = 55;
  this.defense = 0.20;
  this.speed = 3;
  this.range = [1,1];
  this.cost = 100;
}
