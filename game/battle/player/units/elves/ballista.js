Ballista.prototype = new UnitArtillery();
Ballista.prototype.constructor = Ballista;

function Ballista(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprElves" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5], 8);
  this.moveSound = "move";
  this.attackSound = "slash";
  this.name = "Elf Ballista";
  this.health = 100;
  this.attack = 80;
  this.defense = 0;
  this.speed = 4;
  this.range = [2,4];
  this.cost = 600;
  this.player = player;
}
