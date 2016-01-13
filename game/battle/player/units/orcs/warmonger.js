Warmonger.prototype = new UnitInfantry();
Warmonger.prototype.constructor = Warmonger;

function Warmonger() {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [0, 1], 2);
  this.animations.add("move", [2, 3], 8);
  this.animations.add("attack", [4, 5, 6, 7], 8);
  this.moveSound = "move";
  this.attackSound = "slash";
  this.name = "Orc Warmonger";
  this.health = 100;
  this.attack = 60;
  this.defense = 0.2;
  this.speed = 3;
  this.range = [1,1];
  this.cost = 200;
  this.player = player;

}
