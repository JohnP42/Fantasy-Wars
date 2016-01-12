Mortar.prototype = new UnitArtillery();
Mortar.prototype.constructor = Mortar;

function Mortar(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprDwarves" + player);
  game.add.existing(this);
  this.animations.add("stand", [60, 61], 2);
  this.animations.add("move", [62, 63], 8);
  this.animations.add("attack", [64, 65, 66, 67], 8);
  this.name = "Dwarf Mortar";
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("mortarShot");
  this.health = 100;
  this.attack = 90;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [3,5];
  this.cost = 900;
  this.player = player;
}
