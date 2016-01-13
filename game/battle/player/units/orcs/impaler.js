Impaler.prototype = new UnitInfantry();
Impaler.prototype.constructor = Impaler;

function Impaler() {
  this.pos = pos;
  Phaser.Sprite.call(this, game, pos.canvasX(), pos.canvasY(), "sprOrcs" + player);
  game.add.existing(this);
  this.animations.add("stand", [10, 11], 2);
  this.animations.add("move", [12, 13], 8);
  this.animations.add("attack", [14, 15, 16, 17], 8);
  this.moveSound = "move";
  this.attackSound = "bow";
  this.name = "Orc Impaler";
  this.health = 100;
  this.attack = 45;
  this.defense = 0.1;
  this.speed = 3;
  this.range = [1,2];
  this.cost = 100;
  this.player = player;

}
