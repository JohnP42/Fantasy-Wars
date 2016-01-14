Wyvern.prototype = new UnitFlying();
Wyvern.prototype.constructor = Wyvern;

function Wyvern(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [70, 71], 2);
  this.animations.add("move", [72, 73], 8);
  this.animations.add("attack", [74, 75, 76, 77], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Orc Wyvern";
  this.health = 150;
  this.attack = 100;
  this.defense = 0.2;
  this.speed = 6;
  this.range = [1,2];
  this.cost = 800;
  this.player = player;

}
