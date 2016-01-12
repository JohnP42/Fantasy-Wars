Grenadier.prototype = new UnitInfantry();
Grenadier.prototype.constructor = Grenadier;

function Grenadier(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves" + player);
  game.add.existing(this);
  this.animations.add("stand", [10, 11], 2);
  this.animations.add("move", [12, 13], 8);
  this.animations.add("attack", [14, 15, 16, 17], 8);
  this.name = "Dwarf Grenadier";
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("rifle");
  this.health = 100;
  this.attack = 50;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [1,2];
  this.cost = 150;
  this.player = player;
}
