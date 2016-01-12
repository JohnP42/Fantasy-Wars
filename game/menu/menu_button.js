MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;

function MenuButton(x, y, spritekey, targetState, mapkey, armykey, audio) {
  this.mapKey = mapkey;
  this.armyKey = armykey;
  this.targetState = targetState;
  this.audio = audio || null;
  game.add.button(x, y, spritekey, this.actionOnClick, this);
};

MenuButton.prototype.actionOnClick = function() {
  if(this.audio !== null) {
    var sound = game.add.audio(this.audio);
    sound.play();
  };
  game.state.start(this.targetState, this.mapKey, this.armyKey, this.audio);
};
