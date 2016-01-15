MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;


function MenuButton(x, y, spritekey, targetState, gameMode, mapkey, armyKey1, armyKey2, audio, overFrame, outFrame, downFrame, upFrame) {
  this.mapKey = mapkey;
  this.armyKey1 = armyKey1;
  this.armyKey2 = armyKey2;
  this.targetState = targetState;
  this.gameMode = gameMode;

  this.audio = audio || null;
  Phaser.Button.call(this, game, x, y, spritekey, this.actionOnClick, this, overFrame, outFrame, downFrame, upFrame);
  game.add.existing(this);
};

MenuButton.prototype.actionOnClick = function() {
  if(this.audio) {
    var sound = game.add.audio(this.audio, 0.2);
    sound.play();
  };
  game.state.start(this.targetState, true, false, this.mapKey, this.armyKey1, this.armyKey2, this.gameMode, this.audio);
};
