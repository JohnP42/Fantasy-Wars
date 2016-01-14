Salamander.prototype = new UnitCavalry();
Salamander.prototype.constructor = Salamander;

function Salamander(pos, player) {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [30, 31], 2);
  this.animations.add("move", [32, 33], 8);
  this.animations.add("attack", [34, 35, 36, 37], 8);
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Orc Salamander";
  this.health = 100;
  this.attack = 55;
  this.defense = 0.1;
  this.speed = 7;
  this.range = [1, 1];
  this.cost = 250;
  this.player = player;

}
