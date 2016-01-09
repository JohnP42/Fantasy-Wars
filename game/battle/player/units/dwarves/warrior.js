Warrior.prototype = new UnitInfantry();
Warrior.prototype.constructor = Warrior;

function Warrior(position) {
  this.position = position;
  Phaser.Sprite.call(this, game, position.canvasX(), position.canvasY(), "sprDwarves");
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.name = "Dwarf Warrior";
  this.hp = 100;
  this.attack = 55;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [1,1];
}
