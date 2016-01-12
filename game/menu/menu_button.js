MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;

function MenuButton(x, y, spritekey, targetState, mapkey, armykey, audio, overFrame, outFrame, downFrame, upFrame) {
  this.mapKey = mapkey;
  this.armyKey = armykey;
  this.targetState = targetState;

  this.audio = audio || null;
  Phaser.Button.call(this, game, x, y, spritekey, this.actionOnClick, this, overFrame, outFrame, downFrame, upFrame);
  game.add.existing(this);
};

MenuButton.prototype.actionOnClick = function() {
  if(this.audio !== null) {
    var sound = game.add.audio(this.audio, 0.2);
    sound.play();
  };
  game.state.start(this.targetState, true, false, this.mapKey, this.armyKey, this.audio);
};
