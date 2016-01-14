MenuButton.prototype = Object.create(Phaser.Button.prototype);
MenuButton.prototype.constructor = MenuButton;

function MenuButton(args) {
  //x, y, spritekey, targetState, gameMode, mapKey, armyKey1, armyKey2, audio, overFrame, outFrame, downFrame, upFrame
  this.mapKey = args.mapKey;
  this.armyKey = args.armykey;
  this.targetState = args.targetState;
  this.gameMode = args.gameMode;

  this.audio = audio || null;
  Phaser.Button.call(this, game, x, y, spritekey, this.actionOnClick, this, overFrame, outFrame, downFrame, upFrame);
  game.add.existing(this);
};

MenuButton.prototype.actionOnClick = function() {
  if(this.audio) {
    var sound = game.add.audio(this.audio, 0.2);
    sound.play();
  };
  game.state.start(this.targetState, true, false, this.mapKey, this.armyKey, this.gameMode, this.audio);
};
